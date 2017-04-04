/** @jsx h */
import { h } from 'preact';
import { asyncRender } from 'preact-render-to-string';
import { Provider } from 'preact-redux';

import Client from '_client';
import createStore from '_store/createStore';

import template from './index.html.js';

const store = createStore();

require('isomorphic-fetch');

export default function (req, res) {
  asyncRender(
    <Provider store={store}>
      <Client />
    </Provider>
  )
  .then((html) => {
    const initialState = store.getState();
    res.send(template(html, JSON.stringify(initialState)));
  });
}
