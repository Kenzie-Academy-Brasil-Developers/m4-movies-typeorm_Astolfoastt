import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { movieRepository } from "../repositories";
import { AppError } from "../errors/AppError.errors";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

export const verifyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieName: string = req.body.name;
  if (!movieName) {
    return next();
  }

  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const findMovie: Movie | null = await movieRepository.findOne({
    where: {
      name: movieName,
    },
  });

  if (findMovie) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};
