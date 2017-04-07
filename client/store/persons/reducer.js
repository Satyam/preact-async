import {
  GET_PERSON_BY_ID,
} from './actions';

import {
  REPLY_STAGE,
} from '../stages';

export default (
  state = {},
  action
) => {
  switch (action.stage) {
    case REPLY_STAGE:
      switch (action.type) {
        case GET_PERSON_BY_ID:
          return Object.assign({}, state, {
            [action.payload.idPerson]: action.payload,
          });
        default:
          return state;
      }
    default:
      return state;
  }
};
