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
---

## Project Setup 
```json
