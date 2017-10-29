import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListView from './components/DeckListView';
import NewDeckView from './components/NewDeckView';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import configureStore from './configureStore';
import { TabNavigator } from 'react-navigation';

const store = configureStore();

const Tabs = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'DeckListView'
    },
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'Add New Deck'
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={[styles.debug, { flex: 1 }]}>
          <Tabs />
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
