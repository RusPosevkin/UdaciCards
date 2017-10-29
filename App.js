import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListView from './components/DeckListView';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import configureStore from './configureStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={[styles.debug, { flex: 1 }]}>
          <DeckListView />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  debug: {
    padding: 50,
  },
});
