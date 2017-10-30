import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { getDecks } from '../actions';
import { fetchDecks } from '../utils/api';
import { AppLoading } from 'expo';
import { connect } from 'react-redux';

class DeckListView extends Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks();
    fetchDecks()
      .then((entries) => dispatch(getDecks(entries)))
      .then(({ entries }) => {
        console.log('fetchDecks', entries);
      })
      .then(() => this.setState(() => ({ ready: true })));
  };

  render() {
    const { ready } = this.state;

    if (ready === false) {
      return (<AppLoading />);
    }

    const { decks, state } = this.props;

    if (decks.length === 0) {
      return (
        <View style={styles.center}>
          <Text>There is no any deck</Text>
        </View>
      );
    }

    const stateStringify = JSON.stringify(this.state);
    const propsStringify = JSON.stringify(this.props);
    return (
      <View style={styles.container}>
        <Text>DeckListView</Text>
        <Text>{stateStringify}</Text>
        <Text>{propsStringify}</Text>
        {decks.map((item) => (
          <TouchableHighlight
            key={item}
            style={styles.deck}
            onPress={() => this.props.navigation.navigate(
              'IndividualDeckView',
              { deck: item }
              )
            }
          >
            <View>
              <Text style={styles.header}>{item}</Text>
              <Text style={styles.counter}>
                {state[item].questions.length} cards
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  deck: {
    marginBottom: 5,
    borderWidth: 2,
    borderColor: 'purple',
    padding: 20,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
  },
  counter: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
});

function mapStateToProps(state) {
  const decks = Object.keys(state) || [];
  return { decks, state };
};

export default connect(
  mapStateToProps,
)(DeckListView);
