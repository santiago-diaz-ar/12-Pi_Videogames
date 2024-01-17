import axios from "axios";

import { GET_ALL_GAMES, GET_GENRES } from "./types/types";

export const get_all_games = () => {
  return async function (dispatch) {
    const datos = (await axios.get("http://localhost:3001/videogames")).data;
    return dispatch({ type: GET_ALL_GAMES, payload: datos });
  };
};

export const get_genres = () => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/genres");
    return dispatch({ type: GET_GENRES, payload: data });
  };
};
