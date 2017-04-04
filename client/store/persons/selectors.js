import NAME from './name';

export function exists(state, idPerson) {
  return idPerson in state[NAME];
}

export function item(state, idPerson) {
  return state[NAME][idPerson] || {};
}
