import React from 'react';
import { asyncRender } from 'preact-render-to-string';
import { Provider } from 'preact-redux';
import { StaticRouter } from 'react-router-dom';

import Client from '_client';
import createStore from '_store/createStore';

import template from './index.html.js';

const store = createStore();

require('isomorphic-fetch');

export default function (req, res, next) {
  if (!('ssr' in req.query)) {
    next();
    return;
  }
  const context = {};
  asyncRender(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Client />
      </StaticRouter>
    </Provider>
  )
  .then((html) => {
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }
    const initialState = store.getState();
    res.send(template(html, JSON.stringify(initialState)));
  });
}
