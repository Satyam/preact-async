import {
  GET_PERSON_LIST,
  GET_PERSON_BY_ID,
} from './actions';

import {
  REPLY_STAGE,
} from '../stages';

const assign = (...args) => Object.assign({}, ...args);

export default (
  state = {},
  action
) => {
  const payload = action.payload;
  switch (action.stage) {
    case REPLY_STAGE:
      switch (action.type) {
        case GET_PERSON_LIST:
          return assign(
            state,
            payload,
            { $loaded: true },
          );
        case GET_PERSON_BY_ID:
          return assign(
            state,
            { [payload.idPerson]: assign(
              payload,
              { $loaded: true },
            ) }
          );
        default:
          return state;
      }
    default:
      return state;
  }
};
