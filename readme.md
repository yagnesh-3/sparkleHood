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

## 📄 API Endpoints

| Method | Endpoint              | Description                       |Response|
|:-------|:-----------------------|:----------------------------------|------------|
| GET    | `/`                    | Welcome page with GitHub link     |200 OK|
| GET    | `/api-docs`             | API documentation in JSON        |200 OK|
| GET    | `/incidents`            | Fetch all incidents              |200 OK|
| GET    | `/incidents/:id`        | Fetch an incident by ID          |200 OK|
| POST   | `/incidents`            | Create a new incident            |200 OK|

---

## 🧪 Example JSON Payload for POST `/incidents`
```json
{
  "title": "LLM Hallucination in Critical Info",
  "description": "LLM provided incorrect safety procedure information.",
  "severity": "High"
}
```



