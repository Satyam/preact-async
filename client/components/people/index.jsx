import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'preact-redux';

import {
  getPeopleList,
} from '_store/actions';

import { list } from '_store/persons/selectors';

export class PeopleComponent extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    return dispatch(getPeopleList());
  }
  render({ people, location }) {
    return (
      people
      ? (
        <ul>
          {Object.keys(people).map(idPerson => (
            <li key={idPerson}><Link to={`/${idPerson}${location.search}`}>{people[idPerson].name}</Link></li>
          ))}
        </ul>
      )
      : null
    );
  }
}

export default connect(
  state => ({ people: list(state) })
)(PeopleComponent);
