import connectDB from "./config/db";
import app from "./app";
import dotenv from 'dotenv';
import serverless from 'serverless-http';
dotenv.config();
const PORT = process.env.PORT || 3000;

// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server Running in port ${PORT}`)
//     })
// })

connectDB();

module.exports = serverless(app);