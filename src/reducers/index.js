import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import favouriteMovieReducer from "./favouriteMovies";

const reducers = combineReducers({
  movie: movieReducer,
  favoriteMovies: favouriteMovieReducer,
});
export default reducers;
