import { Repository } from "typeorm";
import { TMovieCreate, TMovieUpdade } from "../interfaces/movies.interface";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { movieRepository } from "../repositories";
import {
  Pagination,
  PaginationParams,
} from "../interfaces/pagination.interface";

export const createMovieService = async (
  data: TMovieCreate
): Promise<Movie> => {
  const repository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const newMovie: Movie = await repository.save(data);

  return newMovie;
};

export const getMoviesService = async ({
  nextPage,
  order,
  page,
  perPage,
  prevPage,
  sort,
}: PaginationParams): Promise<Pagination> => {
  const [movies, count] = await movieRepository.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });
  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

export const updateMovieService = async (
  movie: Movie,
  data: TMovieUpdade
): Promise<Movie> => {
  return await movieRepository.save({ ...movie, ...data });
};

export const deleteMovieService = async (movie: Movie): Promise<void> => {
  await movieRepository.remove(movie);
};
