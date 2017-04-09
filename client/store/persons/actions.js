import dataRequest from '_utils/dataRequest';
import { get } from '_utils/httpRequests';

import NAME from './name';
import {
  detailsLoaded,
  listLoaded,
} from './selectors';

export const GET_PERSON_LIST = `${NAME} / get list of people`;
export const GET_PERSON_BY_ID = `${NAME} / get person by id`;

export function getPeopleList() {
  return (dispatch, getState) => {
    if (listLoaded(getState())) {
      return Promise.resolve();
    }
    return dispatch(dataRequest(
      GET_PERSON_LIST,
      get('people'),
    ));
  };
}

export function getPersonById(idPerson) {
  return (dispatch, getState) => {
    if (detailsLoaded(getState(), idPerson)) {
      return Promise.resolve();
    }
    return dispatch(dataRequest(
      GET_PERSON_BY_ID,
      get(`person_${idPerson}`),
      { idPerson },
    ));
  };
}
