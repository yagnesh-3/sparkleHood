import { Request, Response } from "express"
import { Incident } from "../models/incident.model";
import { error } from "console";
export const getAllIncidents = async (_: Request, res: Response) => {
    const incidents = await Incident.find({});
    res.status(200).json(incidents)
}

export const getIncidentById = async (req: Request, res: Response) => {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
        res.status(404).json({ error: "Incident not Found" });
    }
    res.status(200).json(incident);
}

export const createIncident = async (req: Request, res: Response) => {
    const { title, description, severity } = req.body;

    if (!title || !description || !['Low', 'Medium', 'High'].includes(severity)) {
        res.status(400).json({ error: 'Invalid input' });
    }
    try {
        const newIncident = new Incident({ title, description, severity });
        await newIncident.save();
        res.status(201).json(newIncident);
    } catch (error) {
        console.error('Error creating incident:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteIncident = async (req: Request, res: Response) => {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) res.status(404).json({ error: "Incident not found" });
    res.status(200).json({ "message": "Incident deleted successfully." });
}