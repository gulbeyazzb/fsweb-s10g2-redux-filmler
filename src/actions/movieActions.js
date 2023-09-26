export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "Yeni film datasını ekler";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (new_movie) => {
  return { type: ADD_MOVIE, payload: new_movie };
};
