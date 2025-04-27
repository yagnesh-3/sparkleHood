import { NextFunction, Request, Response } from "express"
import { Incident } from "../models/incident.model";

export const getAllIncidents = async (_: Request, res: Response, next: NextFunction) => {
    try {
        const incidents = await Incident.find({});
        res.status(200).json(incidents)
    } catch (error) {
        next(error);
    }
}

export const getIncidentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const incident = await Incident.findById(req.params.id);
        if (!incident) {
            const error = new Error("Incident not found");
            error.name = "NotFound";
            throw error;
        }
        res.status(200).json(incident);
    } catch (error) {
        next(error);
    }
}

export const createIncident = async (req: Request, res: Response, next: NextFunction) => {
    const { title, description, severity } = req.body;

    if (!title || !description || !['Low', 'Medium', 'High'].includes(severity)) {
        const error = new Error('Invalid input');
        error.name = "ValidationError";
        throw error;
    }
    try {
        const newIncident = new Incident({ title, description, severity });
        await newIncident.save();
        res.status(201).json(newIncident);
    } catch (error) {
        next(error);
    }
};

export const deleteIncident = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const incident = await Incident.findByIdAndDelete(req.params.id);
        if (!incident) {
            const error = new Error("Incident not found");
            error.name = "NotFound";
            throw error;
        }
        res.status(200).json({ "message": "Incident deleted successfully." });
    } catch (error) {
        next(error);
    }
}