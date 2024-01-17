import { GET_ALL_GAMES, GET_GENRES } from "./types/types";

const inicialState = {
  games: [],
  detail: [],
  genres: [],
  all_games: [],
};

const rootReducer = (state = inicialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        games: payload,
        all_games: payload,
      };
    case GET_GENRES:
      return {
        ...state,
        games: payload,
        all_games: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
