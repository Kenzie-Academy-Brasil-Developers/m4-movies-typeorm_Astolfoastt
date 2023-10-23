import { Request, Response } from "express";
import { Movie } from "../entities";
import {
  createMovieService,
  deleteMovieService,
  getMoviesService,
  updateMovieService,
} from "../services/movies.services";
import { Pagination } from "../interfaces/pagination.interface";

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie: Movie = await createMovieService(req.body);

  return res.status(201).json(movie);
};

export const getMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movies: Pagination = await getMoviesService(res.locals.pagination);

  return res.status(200).json(movies);
};

export const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie: Movie = await updateMovieService(
    res.locals.foundMovie,
    req.body
  );

  return res.status(200).json(movie);
};

export const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteMovieService(res.locals.foundMovie);
  return res.status(204).json();
};
