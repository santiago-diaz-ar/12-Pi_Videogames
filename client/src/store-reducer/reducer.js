import {
  GET_ALL_GAMES,
  DETAIL_GAMES,
  ORDER_BY_NAME,
  ORDER_BY_GENRES_AND_DB,
  GET_GENRES,
} from "./types/types";

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
    case DETAIL_GAMES:
      return {
        ...state,
        detail: payload,
      };

    case ORDER_BY_NAME:
      const ordenarName =
        payload === "A-Z"
          ? state.games?.sort((a, b) => {
              if (a.name > b.name) {
                return 1; // retorna un valor positivo indicando que B sea antes que A
              }
              if (b.name > a.name) {
                return -1; //retorna un valor negativo indicando para que A sea antes que B
              }
              return 0; // no hay cambios
            })
          : state.games?.sort((a, b) => {
              if (a.name > b.name) {
                return -1; // A antes que B
              }
              if (b.name > a?.name) {
                return 1; // B antes que A
              }
              return 0; // no hay cambios
            });
      return {
        ...state,
        games: ordenarName,
      };

    case GET_GENRES:
      console.log(payload);
      return {
        ...state,
        genres: payload,
      };
    case ORDER_BY_GENRES_AND_DB:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
