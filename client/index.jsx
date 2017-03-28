/** @jsx h */
import { h, render } from 'preact';

import CodeSplit from '_client/codeSplit';
import DataLoading from '_client/dataLoading';

export default function () {
  const dest = document.getElementById('contents');

  render(
    (
      <div className="index-jsx">
        <h1>Code Splitting</h1>
        <CodeSplit />
        <hr />
        <h1>Data Loading</h1>
        <DataLoading file="data1" />
      </div>
    ),
    dest
  );
}
