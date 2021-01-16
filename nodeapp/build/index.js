"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// External Imports
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const body_parser_1 = __importDefault(require("body-parser"));
// Own Modul Imports
const demoModule_1 = require("./demo/demoModule");
const userModule_1 = require("./user/userModule");
const contactModule_1 = require("./contact/contactModule");
const websocket_1 = require("./websocket");
const environment_1 = require("./environment");
// WENN BUILD FÜR PRODUCTION:
// Config auf Prod stellen!
exports.config = environment_1.prodConfig;
/*
Und folgenden Code einkommentieren / in Server index.js aktivieren!*/
if (typeof(PhusionPassenger) != 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}
// Express Server
const app = express_1.default();
// Access Limit per IP: https://www.npmjs.com/package/express-rate-limit
const limiter = express_rate_limit_1.default({
    windowMs: 10 * 60 * 1000,
    max: 150,
    message: 'too many requests',
    statusCode: 429,
});
app.use(limiter);
// Helmet for header Setting and better security: https://www.npmjs.com/package/helmet
app.use(helmet_1.default());
// Express Config Middleware for Logging
app.use((req, res, next) => {
    res.header(exports.config.header);
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});
// support parsing of application/json type post data
app.use(body_parser_1.default.json());
// support parsing of application/x-www-form-urlencoded post data
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Express Root
app.get('/', (req, res) => {
    res.header('content-type', 'text/html');
    res.end(`
  <h1>Wagner WDS</h1></br>
  <h2>accessable api references:</h2></br>
  <ul>
    <li>GET /demo</li>
    <li>/user</li>
  </ul>`);
});
// Express imported Routes
app.all('/demo*', demoModule_1.demoRouter);
app.all('/user*', userModule_1.userRouter);
app.all('/contact*', contactModule_1.contactRouter);
// Error Message Middelware:
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json('unauthorized');
    }
    else {
        next();
    }
});
// Webserver listen
const server = app.listen('passenger', () => {
    console.log('Server is listening on: ' + exports.config.host + ':' + exports.config.port);

    // Websocket server erstellen
    websocket_1.websocket(exports.config, server);
});

