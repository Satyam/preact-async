import React from 'react';

import Person from '_components/person';

export default function () {
  return (<div>
    <h1>Nice people</h1>
    <Person idPerson={1} />
    <Person idPerson={2} />
  </div>);
}
