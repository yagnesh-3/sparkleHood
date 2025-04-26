import express from 'express';
import incidentRoute from './routes/incident.route';
import errorHandler from './middleware/errorHandler';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello world");
})
app.use('/incident', incidentRoute)
app.use(errorHandler)

export default app;