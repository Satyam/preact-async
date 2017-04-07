import React, { Component } from 'react';
import { connect } from 'preact-redux';

import {
  getPersonById,
} from '_store/actions';

import { item } from '_store/persons/selectors';

export class PersonComponent extends Component {
  componentWillMount() {
    const { dispatch, idPerson } = this.props;
    return dispatch(getPersonById(idPerson));
  }
  componentWillReceiveProps({ dispatch, idPerson }) {
    return dispatch(getPersonById(idPerson));
  }
  render({ name }) {
    return (
      <p>Hello {name}!</p>
    );
  }
}

export default connect(
  (state, props) => item(state, props.idPerson)
)(PersonComponent);
