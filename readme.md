# AI Safety Incident Log API

A simple Node.js + Express API (TypeScript) to log and retrieve AI safety incidents.  
Deployed on [Vercel](https://sparkle-hood-three.vercel.app/).

## 🛠 Tech Stack
- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)

---

## 🚀 Features
- **Log a new AI incident** (title, description, severity)
- **Retrieve all incidents**
- **Retrieve a single incident by ID**
- **Deletes a single incident by ID**
- **API Docs at `/api-docs`**
---
---
# 🛠 Project Setup Guide - AI Safety Incident Log API

Welcome to the setup guide for the **AI Safety Incident Log API**!  
Follow these simple steps to get the project up and running locally or deploy it on Vercel 🚀.

---

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
- Start in development mode (with auto-reloading)
```bash
    npm run dev
```
- Build TypeScript (optional for production):
```bash
    npm run build
```
- Start in production (after build):
```bash
    npm start
```
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

---


## 📄 API Endpoints

| Method | Endpoint            | Description                    | Response Code |
|:-------|:---------------------|:-------------------------------|:--------------|
| GET    | `/`                  | Welcome page with GitHub link  | 200 OK        |
| GET    | `/api-docs`           | API documentation in JSON      | 200 OK        |
| GET    | `/incidents`          | Fetch all incidents            | 200 OK        |
| GET    | `/incidents/:id`      | Fetch an incident by ID        | 200 OK        |
| POST   | `/incidents`          | Create a new incident          | 201 Created   |
| DELETE | `/incidents/:id`      | Delete an incident by ID       | 200 OK        |

---

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
```json
[
  {
    "id": 1,
    "title": "Biased Recommendation Algorithm",
    "description": "Algorithm consistently favored certain demographics...",
    "severity": "Medium",
    "reported_at": "2025-03-15T10:00:00Z"
  },
  {
    "id": 2,
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
GET /incidents/1
```
- **Response**:
```json
{
  "id": 1,
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
```json
{
  "id": 4,
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
DELETE /incidents/2
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
### 🔔 Error Responses
- **400 Bad Request**:
```json
{ "error": "Invalid input. All fields are required and severity must be one of Low, Medium, or High." }

```
- **404 Not Found (if incident with given id does not exist)**:
```json
{ "error": "Invalid input. All fields are required and severity must be one of Low, Medium, or High." }

```