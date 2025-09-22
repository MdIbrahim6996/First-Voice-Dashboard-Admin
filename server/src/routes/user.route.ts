import { Router } from "express";

import {
    createUser,
    deleteUser,
    getAllOldUser,
    getAllUser,
    updateUser,
} from "../controllers/user.controller";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/old", getAllOldUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
