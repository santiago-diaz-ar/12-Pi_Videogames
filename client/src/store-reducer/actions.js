import axios from "axios";

import {
  GET_ALL_GAMES,
  DETAIL_GAMES,
  GET_GENRES,
  ORDER_BY_NAME,
} from "./types/types";

export const get_all_games = () => {
  return async function (dispatch) {
    const datos = (await axios.get("http://localhost:3001/videogames")).data
      .results;
    return dispatch({ type: GET_ALL_GAMES, payload: datos });
  };
};

export const filter_alfabetico = (orden) => {
  return async function (dispatch) {
    return dispatch({ type: ORDER_BY_NAME, payload: orden });
  };
};

export const detail_games = (id) => {
  return async function (dispatch) {
    const datos = await axios(`http://localhost:3001/videogames/${id}`);
    return dispatch({ type: DETAIL_GAMES, payload: datos });
  };
};

export const get_genres = () => {
  return async function (dispatch) {
    const data = await axios.get("http://localhost:3001/genres");
    return dispatch({ type: GET_GENRES, payload: data });
  };
};
