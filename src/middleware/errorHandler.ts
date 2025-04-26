import { Request, Response, NextFunction } from 'express';

export default function errorHandler(err: any, _: Request, res: Response, __: NextFunction) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
}
