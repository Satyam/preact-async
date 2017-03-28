/** @jsx h */
import { h } from 'preact';
import A from './a';
import LoadAsync from './loadAsync';

export default function CodeSplit() {
  return (
    <div>
      <A />
      <LoadAsync component={import('./b').then(module => module.default)} />
    </div>
  );
}
