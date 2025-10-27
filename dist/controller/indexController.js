"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const user = require("./userController");
router.use("/", user);
module.exports = router;
//# sourceMappingURL=indexController.js.map