import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';


import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();


const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));



// Use the imported todo routes for any requests starting with /api/todos
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);

})
