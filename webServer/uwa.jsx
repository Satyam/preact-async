/** @jsx h */
import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import Client from '_client';

require('isomorphic-fetch');

export default function (req, res) {
  res.send(renderToString(<Client />));
}
