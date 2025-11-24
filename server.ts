import * as dotenv from "dotenv"
dotenv.config();
import express from "express";
import ServiceBroker from "./broker/broker";
import indexController from "./controller/indexController";
import config from "./config/config";


ServiceBroker.start().then(() => {
  console.log("callback");
});


ServiceBroker.start().then(() => {
  const app = express();

  console.log("Something fix");
  app.use(express.json());


  app.get("/", (req: any, res: any) => {
    res.send("Welcome to Student Management System API");
  })


  app.use("/user", indexController);

  const PORT = config.port || 8000;
  app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on http://0.0.0.0:${PORT}`);
});

});
