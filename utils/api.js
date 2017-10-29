import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'UdaciCards:decks';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY);
};

export function saveDeckTitle(data) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(data));
};
