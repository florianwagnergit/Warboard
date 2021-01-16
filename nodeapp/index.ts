// External Imports
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import bodyParser from 'body-parser';

// Own Modul Imports
import { websocket } from './websocket';
import { devConfig, prodConfig } from './environment';

// WENN BUILD FÜR PRODUCTION:
// Config auf Prod stellen!
export const config = devConfig;

// Express Server
const app = express();

// Access Limit per IP: https://www.npmjs.com/package/express-rate-limit
const limiter = rateLimit({
  windowMs: 10*60*1000, // 10 minutes 
  max: 150,
  message: 'too many requests',
  statusCode: 429,
});

app.use(limiter);

// Helmet for header Setting and better security: https://www.npmjs.com/package/helmet
app.use(helmet());

// Express Config Middleware for Logging
app.use((req, res, next) => {
  res.header( config.header );
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
};

// support parsing of application/json type post data
app.use(bodyParser.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Express Root
app.get('/', (req, res) => {
  res.header('content-type', 'text/html');
  res.end('<h1>Wagner WDS Realtime App</h1></br>');
});

/* Webserver listen
const server = app.listen(config.port, config.host, () => {
  console.log('Server is listening on: ' + config.host + ':' + config.port);
  
  // Websocket server erstellen
  websocket(config, server);
}); */
