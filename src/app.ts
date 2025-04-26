import express from 'express';
import incidentRoute from './routes/incident.route';
import errorHandler from './middleware/errorHandler';
import docs from './routes/api-docs.routes';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send(`
        <html>
          <head>
            <title>AI Incident Log API</title>
          </head>
          <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <h1>Welcome to AI Incident Log API</h1>
            <p><a href="https://github.com/yagnesh-3/sparkleHood" target="_blank" style="text-decoration: none; color: blue;">Click here to view the GitHub Repository</a></p>
          </body>
        </html>
      `);

})



app.use('/api-docs', docs)
app.use('/incident', incidentRoute)
app.use(errorHandler)

export default app;