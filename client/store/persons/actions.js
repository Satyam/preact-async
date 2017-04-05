import dataRequest from '_utils/dataRequest';
import { get } from '_utils/httpRequests';

import NAME from './name';
import {
  exists,
} from './selectors';

export const GET_PERSON_BY_ID = `${NAME} get person by id`;


export function getPersonById(idPerson) {
  return (dispatch, getState) => {
    if (exists(getState(), idPerson)) {
      return Promise.resolve();
    }
    return dispatch(dataRequest(
      GET_PERSON_BY_ID,
      get(`person_${idPerson}`),
      { idPerson },
    ));
  };
}
