import mongoose from "mongoose";
import { AppError } from "../../../shared/utils/errors/AppError";
export const connectionDB = () => {

    mongoose.connect(process.env.DB_URL as string)
        .then(()=>{
            console.log(`Connected to MongoDB`);
        })
        .catch((err)=>{
            console.log("MongoDB connection error:", err);
            process.exit(1); // stop the process if DB fails
        })
    
};
