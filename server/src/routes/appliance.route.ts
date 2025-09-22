import { Router } from "express";
import {
    getAppliancePerPage,
    getAppliances,
    updateAppliance,
} from "../controllers/appliance.controller";

const router = Router();

router.post("/appliance-per-page", getAppliancePerPage);
router.get("/:leadId", getAppliances);
router.put("/:id", updateAppliance);

export default router;
