import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from './actions';

const initialState = {
  myFavorites: [],
  allCharacters: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
        // allCharacters: [...state.allCharacters, action.payload]
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites?.filter((fav) => fav.id !== action.payload)
      }
    case FILTER:
      return {
        ...state, myFavorites: state.allCharacters?.filter((fav) => fav.gender === action.payload)
      };
    case ORDER:
      return {
        ...state, myFavorites: state.allCharacters?.sort((a, b) => a - b)
      };
    default:
      return { ...state };
  };
}

export default rootReducer;