import express from 'express';
import incidentRoute from './routes/incident.route';
import errorHandler from './middleware/errorHandler';
import docs from './routes/api-docs.routes';

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send(`
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>AI Incident Log API</title>
  <style>
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: #f9fafb;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .card {
      background: #ffffff;
      padding: 2rem 3rem;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      text-align: center;
      max-width: 500px;
      width: 100%;
    }

    h1 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: #111827;
    }

    a {
      display: inline-block;
      margin: 0.5rem 0;
      font-size: 1rem;
      color: #2563eb;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-color 0.2s ease;
    }

    a:hover {
      border-color: #2563eb;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome to the AI Incident Log API</h1>
    <a href="https://github.com/yagnesh-3/sparkleHood" target="_blank">View GitHub Repository</a><br />
    <a href="/api-docs">API Documentation</a>
  </div>
</body>
</html>
      `);

})
app.get("/test", (req, res) => {
  throw new Error('Testing the error handler!');
})


app.use('/api-docs', docs)
app.use('/incidents', incidentRoute)
app.use(errorHandler)

export default app;