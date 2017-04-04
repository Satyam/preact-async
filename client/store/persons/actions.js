import NAME from './name';
import {
  exists,
} from './selectors';

import {
  REQUEST_STAGE,
  REPLY_STAGE,
  FAILURE_STAGE,
} from '../stages';

export const GET_PERSON_BY_ID = `${NAME} get person by id`;


export function getPersonById(idPerson) {
  return (dispatch, getState) => {
    if (exists(getState(), idPerson)) {
      return Promise.resolve();
    }
    dispatch({
      type: GET_PERSON_BY_ID,
      stage: REQUEST_STAGE,
      payload: {
        idPerson,
      },
    });
    return fetch(
      `${HOST}:${PORT}/person_${idPerson}.json`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
    .then(response => (
      response.ok
      ? response.json()
      : Promise.reject(response.statusText)
    ))
    .then(data => void dispatch({
      type: GET_PERSON_BY_ID,
      stage: REPLY_STAGE,
      payload: data,
    }))
    .catch(msg => dispatch({
      type: GET_PERSON_BY_ID,
      stage: FAILURE_STAGE,
      payload: {
        idPerson,
      },
      error: msg,
    }))
    ;
  };
}
