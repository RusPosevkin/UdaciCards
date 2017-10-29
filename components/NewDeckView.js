import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';
import { NavigationActions } from 'react-navigation';

class NewDeckView extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  };

  locateToMain = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: 'NewDeckView' }));
  };

  submit = () => {
    const { title }  = this.state;

    this.props.dispatch(addDeck({ title }));

    this.setState(() => ({ title: '' }));

    this.locateToMain();

    saveDeckTitle({ title });
  };

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
        />
        <TouchableOpacity
          onPress={this.submit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

function mapStateToProps(state) {
  return state;
};

export default connect(
  mapStateToProps,
)(NewDeckView);
