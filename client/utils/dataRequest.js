import {
  REQUEST_STAGE,
  REPLY_STAGE,
  FAILURE_STAGE,
} from '_store/stages';

export default function dataRequest(actionType, request, payload) {
  return (dispatch) => {
    dispatch({
      type: actionType,
      stage: REQUEST_STAGE,
      payload,
    });
    return request
    .then(data => void dispatch({
      type: actionType,
      stage: REPLY_STAGE,
      payload: Object.assign({}, payload, data),
    }))
    .catch(msg => dispatch({
      type: actionType,
      stage: FAILURE_STAGE,
      payload,
      error: msg,
    }))
    ;
  };
}
