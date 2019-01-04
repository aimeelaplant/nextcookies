const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const app = next({ dev: true });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());
    server.use((req, res, next) => {
      const cookies = req.cookies;
      const p = new Promise((resolve, reject) => {
        if (!cookies.session_id) {
          resolve('abcde'); 
        }
      });

      p.then((token) => res.cookie('sessionid', token));

      next();
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
