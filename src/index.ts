import connectDB from "./config/db";
import app from "./app";
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3000;


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running in port ${PORT}`)
    })
})