import NAME from './name';
import omit from 'lodash/omit';

export function listLoaded(state) {
  return !!state[NAME].$loaded;
}

export function list(state) {
  return omit(state[NAME], '$loaded');
}

export function detailsLoaded(state, idPerson) {
  return idPerson in state[NAME] && state[NAME][idPerson].$loaded;
}

export function item(state, idPerson) {
  return omit(state[NAME][idPerson], '$loaded') || {};
}
