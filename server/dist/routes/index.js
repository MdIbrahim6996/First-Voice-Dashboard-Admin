"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var admin_1 = __importDefault(require("./admin"));
var superadmin_1 = __importDefault(require("./superadmin"));
var lead_route_1 = __importDefault(require("./lead.route"));
var plan_route_1 = __importDefault(require("./plan.route"));
var process_route_1 = __importDefault(require("./process.route"));
var user_route_1 = __importDefault(require("./user.route"));
var status_route_1 = __importDefault(require("./status.route"));
var appliance_route_1 = __importDefault(require("./appliance.route"));
var auth_controller_1 = require("../controllers/auth.controller");
var common_controller_1 = require("../controllers/common.controller");
var authMiddleware_1 = require("../middlewares/authMiddleware");
var router = (0, express_1.Router)();
router.use("/admin", admin_1.default);
router.use("/superadmin", superadmin_1.default);
//
router.post("/auth/login", auth_controller_1.loginController);
router.post("/auth/logout", auth_controller_1.logoutController);
//
router.use("/lead", authMiddleware_1.isAuth, lead_route_1.default);
router.use("/plan", plan_route_1.default);
router.use("/process", process_route_1.default);
router.use("/status", status_route_1.default);
router.use("/user", user_route_1.default);
router.use("/appliance", appliance_route_1.default);
router.get("/common/user-detail", authMiddleware_1.isAuth, common_controller_1.getUserDetails);
exports.default = router;
