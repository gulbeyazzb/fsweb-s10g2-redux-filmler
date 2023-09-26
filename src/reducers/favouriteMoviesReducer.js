const favoritesInitial = {
  Film: [],
  displayFavorites: false,
};

const favouriteMovieReducer = (state = favoritesInitial, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE_FAVORITES":
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    case "ADD_FAVORITE":
      return {
        ...state,
        Film: [...state.Film, payload],
      };

    default:
      return state;
  }
};
export default favouriteMovieReducer;
