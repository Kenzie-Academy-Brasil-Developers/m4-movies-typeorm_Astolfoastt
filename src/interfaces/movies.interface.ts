import { QueryResult } from "pg";
import { z } from "zod";
import { movieSchema, movieCreateSchema, movieUpdateSchema } from "../schemas/movies.schema";
import { Repository } from "typeorm";
import { Movie } from "../entities";

export type TMovie = z.infer<typeof movieSchema>;
export type TMovieCreate = z.infer<typeof movieCreateSchema>;
export type TMovieUpdade = z.infer<typeof movieCreateSchema>;
export type TMovieRead = Array<TMovie>;
export type TMovieResult = QueryResult<TMovie>;
export type TMovieRepository = Repository<Movie>;
