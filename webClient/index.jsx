/** @jsx h */
import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import { BrowserRouter } from 'react-router-dom';
import Client from '_client';
import createStore from '_store/createStore';

const initialStateEl = document.getElementById('initialState');
const initialState = (
  initialStateEl
  ? JSON.parse(initialStateEl.innerHTML)
  : {}
);

const dest = document.getElementById('contents');
const store = createStore(initialState);
render(
  <Provider store={store}>
    <BrowserRouter>
      <Client />
    </BrowserRouter>
  </Provider>,
  dest,
  dest.firstChild,
);
