"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express = require("express");
const ServiceBroker = require("./broker/broker");
const indexController = require("./controller/indexController");
ServiceBroker.options.started = async function (broker) {
    console.log("callback");
};
ServiceBroker.start().then(() => {
    const app = express();
    console.log("Something fix");
    app.use(express.json());
    app.use("/user", indexController);
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server is listening on  http://localhost:${PORT}`);
    });
});
//# sourceMappingURL=server.js.map