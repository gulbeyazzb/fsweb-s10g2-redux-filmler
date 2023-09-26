import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import favouriteMoviesReducer from "./favouriteMoviesReducer";

const reducers = combineReducers({
  movie: movieReducer,
  favorites: favouriteMoviesReducer,
});
export default reducers;
