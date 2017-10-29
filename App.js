import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import DeckListView from './components/DeckListView';
import NewDeckView from './components/NewDeckView';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import configureStore from './configureStore';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import IndividualDeckView from './components/IndividualDeckView';

const store = configureStore();
const platformPrefix = Platform.OS === 'ios' ? 'ios' : 'md';

const Tabs = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'DeckListView',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name={platformPrefix + '-list'} size={30} color={tintColor} />
      ),
    },
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name={platformPrefix + '-add'} size={30} color={tintColor} />
      ),
    },
  },
}, {
  tabBarOptions: {
    showIcon: true,
  },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  IndividualDeckView: {
    screen: IndividualDeckView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={[styles.debug, { flex: 1 }]}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  debug: {
    paddingTop: 50,
  },
});
