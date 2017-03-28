/** @jsx h */
import { h, Component } from 'preact';

export default class LoadAsync extends Component {
  componentWillMount() {
    const comp = this.props.component;
    if (comp && typeof comp.then === 'function') {
      return comp.then(component => ({ Child: component }));
    }
    return undefined;
  }
  render({ Child }) {
    return <Child />;
  }
}
