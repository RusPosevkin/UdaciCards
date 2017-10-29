import { GET_DECKS } from '../actions';

function decks(state = {}, action) {
  const { decks } = action;

  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        decks,
      };
    default:
      return state;
  };
};

export default decks;
