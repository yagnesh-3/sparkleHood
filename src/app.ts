import express from 'express';
import incidentRoute from './routes/incident.route';
import errorHandler from './middleware/errorHandler';
import docs from './routes/api-docs.routes';
import helmet from 'helmet';
import limiter from './rateLimiter';
import { readFileSync } from 'fs';
import { join } from 'path';
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(limiter);
app.use(helmet());
app.get('/', (req, res) => {
  const file = readFileSync(join(__dirname, '../public/index.html'), 'utf8');
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(file);
})
app.get("/test", (req, res) => {
  throw new Error('Testing the error handler!');
})


app.use('/api-docs', docs)
app.use('/incidents', incidentRoute)
app.use(errorHandler)

export default app;