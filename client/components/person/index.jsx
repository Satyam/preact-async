/** @jsx h */
import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import {
  getPersonById,
} from '_store/actions';

import {
  personsSelectors,
} from '_store/selectors';

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
  (state, props) => personsSelectors.item(state, props.idPerson)
)(PersonComponent);
