import { Router } from "express";
import {
    getAppliances,
    updateAppliance,
} from "../controllers/appliance.controller";

const router = Router();

router.get("/:leadId", getAppliances);
router.put("/:id", updateAppliance);

export default router;
