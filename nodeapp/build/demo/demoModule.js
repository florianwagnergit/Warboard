"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Demo Module
// Architecture: Module <-> Controller <-> Model
const express_1 = __importDefault(require("express"));
// Import Demo Service Functions
const demoController_1 = require("./demoController");
const websocket_1 = require("../websocket");
// Export Demo Routes for root module (index.ts)
exports.demoRouter = express_1.default.Router();
exports.demoRouter.get('/demo', (req, res) => {
    res.header('content-type', 'text/html');
    res.end(`
  <h1>Demo Path...</h1></br><p>accessable api references:</p></br>
  <ul>
    <li>POST demo/speisekarte/pizza</li>
    <li>GET demo/speisekarte</li>
    <li>PUT demo/speisekarte/pizza/:id</li>
    <li>DELETE demo/speisekarte/pizza/:id</li>
  </ul>
  `);
});
exports.demoRouter.post('/demo/speisekarte/pizza', (req, res) => {
    res.header('content-type', 'application/json');
    demoController_1.addPizza(req.body).then(() => {
        demoController_1.getPizzas().then((speisekarte) => {
            res.status(200).json(speisekarte);
            res.end();
            websocket_1.updatePizzaList();
        }).catch((status) => {
            res.status(status).end();
        });
    }).catch((status) => {
        res.status(status).end();
    });
});
exports.demoRouter.get('/demo/speisekarte', (req, res) => {
    res.header('content-type', 'application/json');
    demoController_1.getPizzas().then((speisekarte) => {
        res.status(200).json(speisekarte);
        res.end();
    }).catch((status) => {
        res.status(status).end();
    });
});
exports.demoRouter.put('/demo/speisekarte/pizza/:id', (req, res) => {
    res.header('content-type', 'application/json');
    demoController_1.changePizza(req.body).then(() => {
        res.status(200).end();
        websocket_1.updatePizzaList();
    }).catch((status) => {
        res.status(status).end();
    });
});
exports.demoRouter.delete('/demo/speisekarte/pizza/:id', (req, res) => {
    res.header('content-type', 'application/json');
    demoController_1.removePizza(req.params.id).then(() => {
        demoController_1.getPizzas().then((speisekarte) => {
            res.status(200).json(speisekarte);
            res.end();
            // NOTIFY WS CONNECTIONS TO UPDATE THEIR LIST
            websocket_1.updatePizzaList();
        }).catch((status) => {
            res.status(status).end();
        });
    }).catch((status) => {
        res.status(status).end();
    });
});
