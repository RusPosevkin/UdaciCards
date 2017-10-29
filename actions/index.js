export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';

export function getDecks(data) {
  return {
    type: GET_DECKS,
    data,
  };
};

export function addDeck(data) {
  return {
    type: ADD_DECK,
    data,
  };
};
