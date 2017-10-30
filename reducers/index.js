import { GET_DECKS, ADD_DECK, GET_DECK } from '../actions';

function decks(state = {}, action) {
  const { data, key } = action;

  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
      };
    case GET_DECK:
      return {
        ...state,
        [key]: data,
      };
    case ADD_DECK:
      const { title } = data;
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        },
      };
    default:
      return state;
  };
};

export default decks;
