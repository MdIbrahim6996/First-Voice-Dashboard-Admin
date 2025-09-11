import { Router } from "express";
import adminRoutes from "./admin";
import superadminRoutes from "./superadmin";
import {
    loginController,
    logoutController,
} from "../controllers/auth.controller";
import { getUserDetails } from "../controllers/common.controller";
import { isAuth } from "../middlewares/authMiddleware";

const router = Router();

router.use("/admin", adminRoutes);
router.use("/superadmin", superadminRoutes);
router.post("/auth/login", loginController);
router.post("/auth/logout", logoutController);
router.get("/common/user-detail", isAuth, getUserDetails);

export default router;
