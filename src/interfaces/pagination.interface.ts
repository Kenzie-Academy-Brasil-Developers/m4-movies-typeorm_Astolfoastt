import { TMovieRead } from "./movies.interface";

export type Pagination = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TMovieRead;
};

export type PaginationParams = {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  nextPage: string | null;
  prevPage: string | null;
};
