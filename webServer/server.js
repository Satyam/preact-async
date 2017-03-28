import http from 'http';
import { join } from 'path';
import express from 'express';
import denodeify from 'denodeify';

import uwa from './uwa';

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable import/no-extraneous-dependencies, global-require */
  global.Promise = require('bluebird');
  /* eslint-enable import/no-extraneous-dependencies, global-require */

  Promise.config({
    longStackTraces: true,
    warnings: true, // note, run node with --trace-warnings to see full stack traces for warnings
  });
}

const absPath = relPath => join(ROOT_DIR, relPath);

const app = express();
const server = http.createServer(app);

const listen = denodeify(server.listen.bind(server));
const close = denodeify(server.close.bind(server));

app.use('/bundles', express.static(absPath('bundles')));

app.use(express.static(absPath('webServer/public')));

app.get('/kill', (req, res) => {
  res.send('I am dead');
  close();
  process.exit();
});

app.get('/ssr', uwa);

app.get('*', (req, res) => res.sendFile(absPath('webServer/index.html')));

export function start() {
  return listen(PORT);
}
export function stop() {
  return close();
}
