"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Moleculer = require("moleculer");
require("dotenv").config();
// console.log("Connecting to Redis with environment variables:", {
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   password: process.env.REDIS_PASSWORD,
//   // Avoid logging sensitive information like passwords in production
// });
let theBroker = new Moleculer.ServiceBroker({
    namespace: "StudentManageMentSystem",
    nodeID: "endpoint",
    transporter: {
        type: "Redis",
        // options: {
        //   host: "redis-17181.c8.us-east-1-3.ec2.redns.redis-cloud.com",
        //   port: 17181,
        //   password: "F4H39hOAguWlvxw4MWj6TTBVZlV54wXy",
        //   db: 0,
        //   tls: {},
        // },
        //     options: {
        //   host: "selected-longhorn-77963-gcp-usc1-search.upstash.io",
        //   port: 6379,
        //   password: "F4H39hOAguWlvxw4MWj6TTBVZlV54wXy",
        //   db: 0,
        //   tls: {},
        // }
        // },
        //     RedistHost=selected-longhorn-77963-gcp-usc1-search.upstash.io
        // RedisPort=6379
        // RedisPassword
        options: {
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
            password: process.env.REDIS_PASSWORD,
            db: 0,
            tls: {},
        },
    },
    //   transporter: {
    //   type: "TCP",ၑ
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