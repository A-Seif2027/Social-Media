import { NextFunction, Request, Response } from "express"
import { ZodSchema } from "zod"

type validationSchemas ={
    body?: ZodSchema;
    params?: ZodSchema;
    query?: ZodSchema;
    headers?: ZodSchema;
};

export const Validation= (schema: validationSchemas)=> {
    return async(req:Request,res:Response, next:NextFunction)=>{
        try {
            if (schema.body) {
                await schema.body.parseAsync(req.body);
            }
            if (schema.query) {
                await schema.query.parseAsync(req.query);
            }
            if (schema.params) {
                await schema.params.parseAsync(req.params);
            }
            if (schema.headers) {
                await schema.headers.parseAsync(req.headers);
            }
            return next()
        } catch (error) {
            return res.status(400).json({ message: "Validation error", error})
        }
    }
}