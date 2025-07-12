import express from 'express';
import notesRoutes from "./routes/NotesRoutes.js";
import {connectDB} from './config/db.js';
import dotenv from "dotenv"

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001
connectDB();

app.use(express.json());

app.listen(PORT, ()=>{
    console.log("Server is running on port : PORT");
})

app.use("/api/notes" , notesRoutes);


