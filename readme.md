# AI Safety Incident Log API

A simple Node.js + Express API (TypeScript) to log and retrieve AI safety incidents. [Live Demo](https://sparkle-hood-three.vercel.app/).

## Table of Contents
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Features](#-features)
- [Project Setup Guide](#-project-setup-guide---ai-safety-incident-log-api)
- [Folder Purpose](#-folder-purpose)
- [API Endpoints](#-api-endpoints)
- [Sample Requests and Responses](#-sample-requests-and-responses)
- [Centralized Error Handling in API](#-centralized-error-handling-in-api)
- [Conclusion & Design Decisions](#-conclusion--design-decisions)
- [Contact](#-contact-me)

## 🛠 Tech Stack
- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)
## 📋 Prerequisites
Before setting up the project, make sure you have the following installed on your system:
1. **Node.js (v14 or higher)**

You can download and install Node.js from the official website: https://nodejs.org

2. **npm (Node Package Manager)**

npm is installed automatically with Node.js. You can verify the installation by running:
```bash
npm --version
```
3. **MongoDB**(for local development)

If you're running MongoDB locally, ensure MongoDB is installed and running. Alternatively, you can use a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

4. **TypeScript**(optional)

If you don't have TypeScript installed globally, you can install it by running:
```bash
npm install -g typescript
```
## 🚀 Features
- **Log a new AI incident** (title, description, severity)
- **Retrieve all incidents**
- **Retrieve a single incident by ID**
- **Deletes a single incident by ID**
- **API Docs at `/api-docs`**

## 🛠 Project Setup Guide - AI Safety Incident Log API

Welcome to the setup guide for the **AI Safety Incident Log API**!  
Follow these simple steps to get the project up and running locally or deploy it on Vercel 🚀.



## 1. 📦 Clone the Repository

```bash
git clone https://github.com/yagnesh-3/sparkleHood.git
cd sparkleHood
```
## 2. 📥 Install Dependencies
```bash
npm Install
```
## 3. ⚙️ Create Environment Variables
- Create a .env file at the root of your project and add the following:
```bash
PORT = 3000
MONGODB_URI=your_mongodb_connection_string

```
## 4. 🖊 Project Scripts

In the project directory, you can run the following scripts:
- **Seed the Database:**
    ```bash
    npm run seed
    ```
    Runs the `seed.ts` script to populate your database with initial data (such as dummy incidents). This can be useful for testing or development.

- **Development Mode:**
    ```bash
    npm run dev
    ```
    Runs the project in development mode with auto-reloading. It uses `nodemon` to watch for changes in the `src` folder and automatically restarts the server using `ts-node`.

- **Build the Project:**
    ```bash
    npm run build
    ```
    Compiles the TypeScript files into JavaScript and places them in the `dist` folder.

- **Start the Production Server:**
    ```bash
    npm start
    ```
    Starts the server in production mode, running the compiled JavaScript files from the `dist` directory.


## 5. 🚀 Run Locally
- After running npm run dev, your API will be available at:
```bash
http://localhost:3000
```
Test it by visiting
- / → Welcome message

- /incidents → Fetch all incidents

- /api-docs → API Documentation 
## 🛠 Folder Purpose

| Folder/File | Purpose |
|:---|:---|
| `src/config/db.ts` | Database connection setup. |
| `src/controllers/incidentController.ts` | Incident logic (CRUD operations). |
| `src/models/incidentModel.ts` | Defines Incident types or schema. |
| `src/routes/incidentRoutes.ts` | API endpoints. |
| `src/routes/api-docs.routes.ts` | API endpoint for api-docs. |
| `src/middleware/errorHandler.ts` | Centralized error handling. |
| `src/app.ts` | Initializes Express app, middleware, and routes. |
| `src/index.ts` | Connects database and starts server. |
| `vercel.json` | Config to deploy on Vercel. |
| `.gitignore` | Files/folders to ignore in Git. |
| `tsconfig.json` | TypeScript settings. |
| `README.md` | This file! 📄 |




## 📄 API Endpoints

| Method | Endpoint            | Description                    | Response Code |
|:-------|:---------------------|:-------------------------------|:--------------|
| GET    | `/`                  | Welcome page with GitHub link  | 200 OK        |
| GET    | `/api-docs`           | API documentation in JSON      | 200 OK        |
| GET    | `/incidents`          | Fetch all incidents            | 200 OK        |
| GET    | `/incidents/:id`      | Fetch an incident by ID        | 200 OK / 404 Not Found |
| POST   | `/incidents`          | Create a new incident          | 201 Created / 400 Bad Request   |
| DELETE | `/incidents/:id`      | Delete an incident by ID       | 200 OK / 404 Not Found |



## 📬 Sample Requests and Responses

### 1. `GET /api-docs`
- **Description**: Returns the API documentation in JSON format.
- **Response**:
```json
{
  "message": "AI Incident Log API Documentation",
  "routes": [
    {
      "method": "GET",
      "path": "/incidents",
      "description": "Get all incidents"
    },
    {
      "method": "GET",
      "path": "/incidents/:id",
      "description": "Get a single incident by ID"
    },
    {
      "method": "POST",
      "path": "/incidents",
      "description": "Create a new incident (send title, description, severity)"
    },
    {
      "method": "DELETE",
      "path": "/incidents/:id",
      "description": "Delete a new incident by id"
    }
  ],
  "github": "https://github.com/yagnesh-3/sparkleHood"
}
```
### 2. `GET /`
- **Description**: Returns a simple welcome message with a GitHub link.
- **Response**:
```html
Welcome to AI incident Log API <a href="https://github.com/yagnesh-3/sparkleHood">click here</a>
```
### 3. `GET /incidents`
- **Description**: Fetch all incidents.
- **Response**:
```bash
[
  {
    "id": 680c64496c3961371a012edb,
    "title": "Biased Recommendation Algorithm",
    "description": "Algorithm consistently favored certain demographics...",
    "severity": "Medium",
    "reported_at": "2025-03-15T10:00:00Z"
  },
  {
    "id": 680c64496c3961371a012edc,
    "title": "LLM Hallucination in Critical Info",
    "description": "LLM provided incorrect safety procedure information...",
    "severity": "High",
    "reported_at": "2025-04-01T14:30:00Z"
  }
]
```
### 4. `GET /incidents/:id`
- **Description**: Fetch a single incident by its id.
- **Request Example**:
```bash
GET /incidents/680c64496c3961371a012edb
```
- **Response**:
```bash
{
  "id": 680c64496c3961371a012edb,
  "title": "Biased Recommendation Algorithm",
  "description": "Algorithm consistently favored certain demographics...",
  "severity": "Medium",
  "reported_at": "2025-03-15T10:00:00Z"
}
```
### 5. `POST /incidents`
- **Description**: Create a new incident.
- **Request Body**:
```json 
{
  "title": "Autonomous Vehicle Misjudgment",
  "description": "Self-driving car incorrectly identified an obstacle, causing sudden braking.",
  "severity": "High"
}
```
- **Response**:
```bash
{
  "id": 661509a2f15c3f5f9b3cfd41,
  "title": "Autonomous Vehicle Misjudgment",
  "description": "Self-driving car incorrectly identified an obstacle, causing sudden braking.",
  "severity": "High",
  "reported_at": "2025-04-26T12:45:00Z"
}
```
### 6. `DELETE /incidents/:id`
- **Description**: Delete a specific incident by id.
- **Request Example**:
```bash
DELETE /incidents/680c64496c3961371a012edc
```
- **Response**:
```json
{
  "message": "Incident deleted successfully."
}
```
- **If the incident is not found**:
```json
{
  "error": "Incident not found."
}
```
## 🚨 Centralized Error Handling in API
This project demonstrates a centralized error-handling mechanism in a Node.js Express API. The goal is to efficiently manage errors across the API using a single middleware function that catches all errors and returns consistent, user-friendly error responses with proper HTTP status codes.
## 📜 Overview
In a typical Express API, errors can occur from various sources, such as invalid user input, database issues, or unexpected server problems. Rather than handling errors individually in each route, we consolidate them in a centralized error handler.

**This provides several advantages**:
- **Cleaner code** in routes/controllers.
- **Consistent error responses** throughout the app.
- **Easier to manage and update error handling** logic in one place.
## 🛠 Centralized Error Handling Setup
**The error handling system consists of:**
- **Custom error types** (ValidationError, NotFound, CastError, etc).
- A **centralized errorHandler** middleware that catches and responds to errors.


## 🔧 How It Works
1. **Throwing Errors**: In various controller functions (e.g., when an incident is not found or when user input is invalid), errors are thrown with custom name properties. For example:
```bash
if (!incident) {
    const error = new Error("Incident not found");
    error.name = "NotFound";
    throw error;
}
```
Here, we create a new Error object and assign a name property that indicates the error type ("NotFound" in this case).

2. **Centralized Error Handler**: The error handler middleware captures all errors thrown in the application and sends appropriate responses based on the error type:
```bash
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
    return res.status(500).json({ error: err.message });
}
```
- **ValidationError**: Caught for input validation failures (e.g., missing or invalid fields).
- **NotFound**: Caught when a resource is not found (e.g., an incident doesn't exist).
- **CastError**: Caught when the provided ID is not in the valid ObjectId format.
- **Other errors**: Any other errors are handled as 500 Internal Server Error.

3. **Middleware Integration**: The errorHandler is added as the last middleware in the Express app to ensure that it catches all errors:
```bash
import errorHandler from './middlewares/errorHandler';

app.use(errorHandler); // Add it after all routes
```
## 💡 Benefits of Centralized Error Handling
- **Consistency**: Every error is handled in a uniform way, with proper HTTP status codes and clear messages.
- **Maintainability**: Changes to error handling (e.g., adding new error types or modifying response structure) can be made in a single place without modifying each route or controller.
- **Separation of Concerns**: Business logic in your route handlers remains focused on the task at hand, while error handling is handled separately.
- **Extensibility**: New error types can easily be added in the future (e.g., AuthenticationError, AuthorizationError, etc.).

## 🌍 Example Flow
Here’s an example of how centralized error handling works for different scenarios:
1. **Validation Error**:
User sends an incomplete or invalid request (e.g., missing title or an invalid severity).
```json
{
  "error": "Invalid input. All fields are required and severity must be one of Low, Medium, or High."
}
```
**Status Code: 400 (Bad Request)**

2. **Not Found**:
User requests an incident that doesn’t exist.
```json
{
  "error": "Incident not found"
}
```
**Status Code: 404 (Not Found)**

3. **Invalid ID Format**:
User sends a non-ObjectId string as the incident ID.
```json
{
  "error": "Invalid ID format"
}
```
**Status Code: 400 (Bad Request)**

4. **Internal Server Error**:
Unexpected server issues.
```json
{
  "error": "Internal server error"
}
```
**Status Code: 500 (Internal Server Error)**
## 📝 Conclusion & Design Decisions
In this project, several key design decisions were made to ensure scalability and ease of use:
- **API Design**: The decision was made to use RESTful APIs for simplicity and compatibility with a wide range of clients.
- **Error Handling**: A centralized error-handling mechanism was implemented to return consistent error responses across all endpoints.
- **Database Choice**: MongoDB was chosen due to its flexibility in handling diverse incident data.

Overall, the design prioritizes maintainability and scalability, allowing for easy future improvements and integrations.

For any further inquiries or clarification regarding the project, please feel free to contact me via email or GitHub.
## 📞 Contact Me

If you have any questions, feedback, or suggestions, feel free to reach out!

- **Email**: [yagnesh.glk@gmail.com](mailto:yagnesh.glk@gmail.com)
- **LinkedIn**: [linkedin.com/in/gylgr](https://www.linkedin.com/in/gylgr)
- **GitHub**: [github.com/yagnesh-3](https://github.com/yagnesh-3)

I look forward to hearing from you!