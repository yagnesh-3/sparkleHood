import connectDB from './src/config/db';
import { Incident } from './src/models/incident.model';
async function seedDatabase() {
    try {

        await connectDB();
        console.log("Connected to the database");

        await Incident.deleteMany({});
        console.log("Deleted all existing incidents");

        const sampleIncidents = [
            {
                "title": "Biased Recommendation Algorithm",
                "description": "Algorithm consistently favored certain demographics...",
                "severity": "Medium",
                "reported_at": "2025-03-15T10:00:00Z"
            },
            {
                "title": "LLM Hallucination in Critical Info",
                "description": "LLM provided incorrect safety procedure information...",
                "severity": "High",
                "reported_at": "2025-04-01T14:30:00Z"
            },
            {
                "title": "Minor Data Leak via Chatbot",
                "description": "Chatbot inadvertently exposed non-sensitive user metadata...",
                "severity": "Low",
                "reported_at": "2025-03-20T09:15:00Z"
            },
            {
                "title": "Unauthorized AI Model Access",
                "description": "An internal tool allowed users to query restricted AI models without proper authentication.",
                "severity": "High",
                "reported_at": "2025-04-10T11:00:00Z"
            },
            {
                "title": "Toxic Content Generation",
                "description": "A content generator produced hate speech despite safety filters being active.",
                "severity": "High",
                "reported_at": "2025-04-05T16:45:00Z"
            },
            {
                "title": "False Positive in Threat Detection",
                "description": "AI mistakenly flagged harmless user accounts as security threats, causing account suspensions.",
                "severity": "Medium",
                "reported_at": "2025-03-25T08:20:00Z"
            }
        ]


        const incidents = await Incident.insertMany(sampleIncidents);
        console.log(`Inserted ${incidents.length} incidents`);

    } catch (error) {
        console.error("Error seeding the database:", error);
    }
}

seedDatabase();
