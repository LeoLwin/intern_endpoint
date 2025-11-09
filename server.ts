require("dotenv").config();
const express = require("express");
import type { Request, Response, NextFunction } from "express";
const ServiceBroker = require("./broker/broker");
const indexController = require("./controller/indexController");

ServiceBroker.options.started = async function (broker: any) {
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
