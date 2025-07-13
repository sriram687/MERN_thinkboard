import express from 'express';
import notesRoutes from "./routes/NotesRoutes.js";
import {connectDB} from './config/db.js';
import dotenv from "dotenv"
import rateLimiter from './middleware/ratelimiter.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001


app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes" , notesRoutes);

connectDB().then(()=>{
app.listen(PORT, ()=>{
    console.log("Server is running on port : PORT");
})

})





