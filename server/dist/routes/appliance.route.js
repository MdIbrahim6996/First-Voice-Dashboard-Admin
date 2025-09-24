"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appliance_controller_1 = require("../controllers/appliance.controller");
var router = (0, express_1.Router)();
router.post("/appliance-per-page", appliance_controller_1.getAppliancePerPage);
router.get("/:leadId", appliance_controller_1.getAppliances);
router.put("/:id", appliance_controller_1.updateAppliance);
exports.default = router;
