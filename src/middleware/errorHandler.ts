import { Request, Response, NextFunction } from 'express';

export default function errorHandler(err: any, _: Request, res: Response, __: NextFunction): any {
    if (err.name === "ValidationError") {
        return res.status(400).json({ error: "Invalid input. All fields are required and severity must be one of Low, Medium, or High." });
    }
    if (err.name === "NotFound") {
        return res.status(404).json({ error: err.message });
    }
    if (err.name === "CastError") {
        return res.status(400).json({ error: "Invalid ID format" });
    }
    res.status(500).json({ error: err.message });
}
