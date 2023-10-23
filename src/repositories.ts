import { AppDataSource } from "./data-source"
import { Movie } from "./entities"
import { TMovieRepository } from "./interfaces/movies.interface"

export const movieRepository: TMovieRepository = AppDataSource.getRepository(Movie);