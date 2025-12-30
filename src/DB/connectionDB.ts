import mongoose from "mongoose";
import { AppError } from "../utils/classError";

export const connectionDB = () => {
    const url = process.env.DB_URL;
    if (!url) {
        throw new AppError("DB_URL is not defined");
    }

        mongoose.connect(url)
        .then(()=>{
            console.log(`Connected to MongoDB: ${url}`);
        })
        .catch((err)=>{
            console.log("MongoDB connection error:", err);
            process.exit(1); // stop the process if DB fails
        })
    
};
