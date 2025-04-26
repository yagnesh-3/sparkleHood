import { Router } from "express";
import { getAllIncidents, createIncident, getIncidentById, deleteIncident } from "../controllers/incident.controller";
const router = Router();

router.get('/', getAllIncidents)
router.get('/:id', getIncidentById);
router.post('/', createIncident);
router.delete('/:id', deleteIncident);  

export default router;