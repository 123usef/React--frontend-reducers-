const initial_state = {
  fav: [],
  counter: 0,
};
export default function favitems(state = initial_state, action) {
  switch (action.type) {
    case "AddFavourite":
      return {
        ...state,
        fav: state.fav.concat(action.payload),
        counter: (state.counter += 1),
      };
    case "RemoveFavorite":
      // state.favMovies.map((movie) => movie.id).indexOf(action.payload.id);
      // let remove = state.fav.filter((item, id)=>id !== index )
      var index = state.fav.map((mv) => mv.id).indexOf(action.payload.id);
      let remove = state.fav.filter((item, id) => id !== index);
      return {
        fav: remove,
        counter: (state.counter -= 1),
      };
    default:
      return state;
  }
}
