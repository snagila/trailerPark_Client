import { setClickedOnallresults } from "./MovieSlice";

// function to update the clicked movie state during all result page
export const clickedMovieOnallResults = (clickedmovietitle) => (dispatch) => {
  dispatch(setClickedOnallresults(clickedmovietitle));
};
