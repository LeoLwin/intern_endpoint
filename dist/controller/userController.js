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
module.exports = router;
//# sourceMappingURL=userController.js.map