const express = require('express');
const next = require('next');

const app = next({ dev: true });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use((req, res, next) => {
      next();
    });

    server.get('/test', (req, res) => {
      app.render(req, res, '/test', req.params);
    });

    server.get('/', (req, res) => {
      app.render(req, res, '/index', req.params);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
