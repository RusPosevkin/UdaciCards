import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'UdaciCards:decks';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
};

export function fetchDeck(id) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((data) => {
    return JSON.parse(data)[id];
  });
};

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [],
    },
  }));
};
