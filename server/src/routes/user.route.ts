import { Router } from "express";

import {
    createUser,
    deleteUser,
    getAllOldUser,
    getAllUser,
    getUserInfo,
    getUserYearlyAttendance,
    getUserYearlyLeads,
    updateUser,
} from "../controllers/user.controller";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/old", getAllOldUser);
router.get("/:id", getUserInfo);
router.get("/:id/yearly-attendance", getUserYearlyAttendance);
router.get("/:id/yearly-leads", getUserYearlyLeads);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
