import React, { Component } from 'react';
import { connect } from 'preact-redux';

import {
  getPersonById,
} from '_store/actions';

import { item } from '_store/persons/selectors';

export class PersonComponent extends Component {
  componentWillMount() {
    const { dispatch, match } = this.props;
    return dispatch(getPersonById(match.params.idPerson));
  }
  componentWillReceiveProps({ dispatch, match }) {
    return dispatch(getPersonById(match.params.idPerson));
  }
  render({ name, drives }) {
    return (
      <p>Hello {name}, I like your {drives}!</p>
    );
  }
}

export default connect(
  (state, props) => item(state, props.match.params.idPerson)
)(PersonComponent);
