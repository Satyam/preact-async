/** @jsx h */
import { h, render } from 'preact';
import Client from '_client';

// const initialStateEl = document.getElementById('initialState');
// let initialState = {};
// if (initialStateEl) {
//   initialState = JSON.parse(initialStateEl.innerHTML);
// }
//
const dest = document.getElementById('contents');

render(<Client />, dest);
