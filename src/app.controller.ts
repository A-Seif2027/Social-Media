import {resolve} from "path"
import { config } from "dotenv"
import express, { Request ,Response,NextFunction} from "express"
import cors from 'cors'
import helmet from "helmet"
import {rateLimit} from 'express-rate-limit'
import { AppError } from "./utils/classError"
import userRouter from "./modules/users/user.controller.js"
import { connectionDB } from "./DB/connectionDB"

config({path:resolve('./config/.env')})


const app:express.Application=express()
const port: string |number= process.env.PORT ||5000
const limiter= rateLimit({
    windowMs:5*60*1000,
    limit: 10,
    message: {
        error: "Game Over....."
    },
    statusCode:429,
    legacyHeaders: false
})



const bootstrab= ()=>{
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(limiter)


    app.get("/", (req: Request, res: Response, next: NextFunction)=>{
        return res.status(200).json({message:"welcome bro  👌"})
    })


    app.use("/users",userRouter)

    connectionDB()
    app.use("/*demo", (req: Request, res: Response, next: NextFunction) => {
        throw new AppError( `Invalied URL ${req.originalUrl}`,404 )
    })

    app.use((err: AppError,req: Request, res: Response, next: NextFunction) => {
        return res.status(err.statusCode as unknown as number | 500).json({ message: err.message, stack: err.stack })
    })

    app.listen(port,()=>{
        console.log(`server is running on port ${port} 👍`);
        
    })
}
export default bootstrab