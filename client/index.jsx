import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';

import People from '_components/people';
import Person from '_components/person';

export default withRouter((props) => {
  const ssr = props.location.search === '?ssr';
  return (<div>
    <h1>Nice people</h1>
    <Route path="/" component={People} />
    <Route exact path="/:idPerson" component={Person} />
    <hr />
    <p>For {ssr ? 'non-' : ''}ssr version <Link to={`${props.location.pathname}${ssr ? '' : '?ssr'}`}>click here</Link></p>
    <p>You have to click F5 or Ctrl-r to actually force a server-side re-render</p>
  </div>);
});
