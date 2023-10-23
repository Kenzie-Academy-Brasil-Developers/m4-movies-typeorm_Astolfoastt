import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  getMoviesController,
  updateMovieController,
} from "../controllers/movies.controllers";
import { verifyIdExists } from "../middlewares/verifyIdValid.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { movieCreateSchema } from "../schemas/movies.schema";
import { verifyNameExists } from "../middlewares/verifyNameValid.middleware";
import { pagination } from "../middlewares/pagination.middleware";

export const moviesRouter: Router = Router();

moviesRouter.post(
  "/",
  validateBody(movieCreateSchema),
  verifyNameExists,
  createMovieController
);
moviesRouter.get(
  "/", 
  pagination, 
  getMoviesController
);

moviesRouter.use(
  "/:id", 
  verifyIdExists
);
moviesRouter.patch(
  "/:id",
  validateBody(movieCreateSchema),
  verifyNameExists,
  updateMovieController
);
moviesRouter.delete(
  "/:id", 
  verifyIdExists, 
  deleteMovieController
);
