/** @jsx h */
import { h, Component } from 'preact';

export default class DataComponent extends Component {
  componentWillMount() {
    return fetch(
      `${HOST}:${PORT}/${this.props.file}.json`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    ).then(response => (
      response.ok
      ? response.json()
      : Promise.reject(response.statusText)
    ));
  }
  componentWillReceiveProps(nextProps) {
    return fetch(
      `${HOST}:${PORT}/${nextProps.file}.json`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    ).then(response => (
      response.ok
      ? response.json()
      : Promise.reject(response.statusText)
    ));
  }
  render({ hello }) {
    return (
      <div>
        <p>Data fetched</p>
        <p>Hello {hello}!</p>
      </div>
    );
  }
}
