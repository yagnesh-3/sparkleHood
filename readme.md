# AI Safety Incident Log API

A simple Node.js + Express API (TypeScript) to log and retrieve AI safety incidents.  
Deployed on [Vercel](https://vercel.com).

## 🛠 Tech Stack
- Node.js
- Express.js
- TypeScript
- MongoDB (Mongoose)
- Vercel Serverless Functions

---

## 🚀 Features
- **Log a new AI incident** (title, description, severity)
- **Retrieve all incidents**
- **Retrieve a single incident by ID**
- **API Docs at `/api-docs`**

---

## 📂 Project Structure
ai-safety-api/
 ├── src/ │ 
 ├── controllers/ │ 
 │ └── incident.controller.ts │ 
 ├── routes/ │ 
 │ └── incident.routes.ts │ 
 ├── models/ │ 
 │ └── incident.model.ts │ 
 ├── middleware/ │ 
 │ └── errorHandler.ts │ 
 ├── config/ │ 
 │ └── db.ts │ 
 ├── app.ts │ 
 └── index.ts 
 ├── prepopulate.ts # optional: seed initial incidents 
 ├── .env 
 ├── README.md 
 ├── package.json 
 ├── tsconfig.json 
 ├── vercel.json


---

## 📄 API Endpoints

| Method | Endpoint              | Description                       |
|:-------|:-----------------------|:----------------------------------|
| GET    | `/`                    | Welcome page with GitHub link     |
| GET    | `/api-docs`             | API documentation in JSON        |
| GET    | `/incidents`            | Fetch all incidents              |
| GET    | `/incidents/:id`        | Fetch an incident by ID          |
| POST   | `/incidents`            | Create a new incident            |

---

## 🧪 Example JSON Payload for POST `/incidents`
```json
{
  "title": "LLM Hallucination in Critical Info",
  "description": "LLM provided incorrect safety procedure information.",
  "severity": "High"
}
