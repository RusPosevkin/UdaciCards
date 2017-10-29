import { GET_DECKS, ADD_DECK } from '../actions';

function decks(state = {}, action) {
  const { data } = action;

  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
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
