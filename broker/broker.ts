
import { ServiceBroker } from "moleculer";
import * as dotenv from "dotenv";
import config from "../config/config";  
 console.log("Initializing Service Broker with Redis transporter...",);

dotenv.config();
console.log("Redis Config:", {
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
});
let theBroker = new ServiceBroker(
  {
  namespace: "BlogErina",
  nodeID: "endpoint-node",
  logLevel: "info",

  transporter: {
    type: "Redis",
    options: {
      host: config.redis.host,
      port: Number(config.redis.port),
      password: config.redis.password,
      db: 0,
      // tls: {},
    },
  },
  cacher: "Redis",
    logger: true,
    created(broker) {
        broker.logger.info("created");
    },
    started(broker) {
        broker.logger.info("started");
    },
    stopped(broker) {
        broker.logger.info("stopped");
    },

}
);

export default  theBroker;
