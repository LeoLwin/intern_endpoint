"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Moleculer = require("moleculer");
let theBroker = new Moleculer.ServiceBroker({
    namespace: "StudentManageMentSystem",
    nodeID: "endpoint",
    transporter: {
        type: "Redis",
        options: {
            host: "127.0.0.1",
            port: 6379,
            password: "",
            db: 0,
        },
    },
    //   transporter: {
    //   type: "TCP",
    //   options: {
    //     // endpoint doesn't need a fixed port; leave blank or set a different port
    //     port: 61300
    //   }
    // },
    cacher: {
        type: "memory",
    },
    logger: console,
    logLevel: "info",
    //   created(broker) {
    //     broker.logger.info("created");
    //   },
    //   started(broker) {
    //     broker.logger.info("started");
    //   },
    //   stopped(broker) {
    //     broker.logger.info("stopped");
    //   },
});
module.exports = theBroker;
//# sourceMappingURL=broker.js.map