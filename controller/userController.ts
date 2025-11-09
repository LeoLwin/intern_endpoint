const router = require("express").Router();
const ServiceBroker = require("../broker/broker");
import type { Request, Response, NextFunction } from "express";

const handleError = (res: Response, err: Error) => {
  console.error("Endpoint error:", err);
  res.json({ error: err.message });
};

router.get("/list", async (req: Request, res: Response) => {
  try {
    // your logic here
    const result: any = await ServiceBroker.call("sms.user.list");
    console.log("Result : ", result);
    res.json({ result });
  } catch (err) {
    handleError(res, err as Error);
  }
});

router.post("/create", async (req: Request, res: Response) => {
  try {
    if (!req.body) { return res.json({ message: "Not found req.body" }) }
    console.log("req.body : ", req.body)

    const { name, email } = req.body;

    if (!name || !email) {
      return res.json({ message: "Invalid arguments" });
    }

    // Call Moleculer service
    const result = await ServiceBroker.call("sms.user.create", { name, email });
    console.log("Result:", result);

    res.json({ result });
  } catch (err: any) {
    handleError(res, err);
  }
});


export = router; // CommonJS compatible export
