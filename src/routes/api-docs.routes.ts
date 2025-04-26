import { Router } from "express";
const router = Router();


router.get('/', (req, res) => {
    res.json({
        message: 'AI Incident Log API Documentation',
        routes: [
            {
                method: 'GET',
                path: '/incidents',
                description: 'Get all incidents',
            },
            {
                method: 'GET',
                path: '/incidents/:id',
                description: 'Get a single incident by ID',
            },
            {
                method: 'POST',
                path: '/incidents',
                description: 'Create a new incident (send title, description, severity)',
            },
            {
                method: 'DELETE',
                path: '/incidents/:id',
                description: 'Delete a new incident by id',
            }
        ],
        github: 'https://github.com/yagnesh-3/sparkleHood'
    });
});

export default router;