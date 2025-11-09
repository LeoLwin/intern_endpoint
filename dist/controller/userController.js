"use strict";
const router = require("express").Router();
const ServiceBroker = require("../broker/broker");
const handleError = (res, err) => {
    console.error("Endpoint error:", err);
    res.json({ error: err.message });
};
router.get("/list", async (req, res) => {
    try {
        // your logic here
        const result = await ServiceBroker.call("sms.user.list");
        console.log("Result : ", result);
        res.json({ result });
    }
    catch (err) {
        handleError(res, err);
    }
});
router.post("/create", async (req, res) => {
    try {
        if (!req.body) {
            return res.json({ message: "Not found req.body" });
        }
        console.log("req.body : ", req.body);
        const { name, email } = req.body;
        if (!name || !email) {
            return res.json({ message: "Invalid arguments" });
        }
        // Call Moleculer service
        const result = await ServiceBroker.call("sms.user.create", { name, email });
        console.log("Result:", result);
        res.json({ result });
    }
    catch (err) {
        handleError(res, err);
    }
});
module.exports = router;
//# sourceMappingURL=userController.js.map