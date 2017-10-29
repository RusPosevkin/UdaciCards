import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
        <View>
          <Text>There is no any deck</Text>
        </View>
      );
    }

    const stateStringify = JSON.stringify(this.state);
    const propsStringify = JSON.stringify(this.props);
    return (
      <View>
        <Text>DeckListView</Text>
        <Text>{stateStringify}</Text>
        <Text>{propsStringify}</Text>
      </View>
    );
  }
};

function mapStateToProps(state) {
  const decks = Object.keys(state) || [];
  return { decks, state };
};

export default connect(
  mapStateToProps,
)(DeckListView);
