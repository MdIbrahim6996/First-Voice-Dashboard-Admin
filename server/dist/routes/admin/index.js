"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var lead_controller_1 = require("../../controllers/lead.controller");
var router = (0, express_1.Router)();
//LEADS
router.get("/lead", lead_controller_1.getAllLead);
router.post("/lead", lead_controller_1.createLead);
router.get("/lead", lead_controller_1.getAllLead);
// router.get("/lead/:userId", getAllLeadOfUser);
router.get("/lead/date/:userId", lead_controller_1.getLeadOfUserByDate);
router.put("/lead/:id", lead_controller_1.updateLead);
router.delete("/lead/:id", lead_controller_1.deleteLead);
exports.default = router;
