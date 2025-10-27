const express = require("express");
import type { Request, Response, NextFunction } from "express";
const ServiceBroker = require("./broker/broker");
const indexController = require("./controller/indexController")

ServiceBroker.options.started = async function (broker: any) {
  console.log("callback");
};

ServiceBroker.start().then(() => {

  const app = express();

  app.use("/user", indexController);


  // app.use("/", (req: Request, res: Response) => {
  //     console.log('Hello this is nodejs project')
  //     res.json("This is testing");
  // });

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server is listening on  http://localhost:${PORT}`)
  })
});

