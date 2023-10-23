import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { QueryFailedError } from "typeorm";
import { AppError } from "../errors/AppError.errors";

export const handleErrors = async (
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return response.status(400).json({ message: error.flatten().fieldErrors });
  }

  if (error instanceof QueryFailedError) {
    return response.status(400).json({ message: error.message });
  }

  console.log(error);
  return response.status(500).json({ message: "Internal Server Error" });
};
