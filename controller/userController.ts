
const router = require("express").Router();
const ServiceBroker = require("../broker/broker")
import type { Request, Response, NextFunction } from "express";

const handleError = (res: Response, err: Error) => {
  console.error("Endpoint error:", err);
  res.json({ error: err.message });
};

router.get("/list",async (req: Request, res: Response) => {
  try {
    // your logic here
    const result: any = await ServiceBroker.call("sms.user.list");
  console.log("Result : ", result)
    res.json({ message: "List endpoint" });
  } catch (err) {
    handleError(res, err as Error);
  }
});

export = router; // CommonJS compatible export
