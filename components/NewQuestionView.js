import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';
import { NavigationActions } from 'react-navigation';

class NewQuestionView extends Component {
  constructor(props) {
    super(props);
    this.state = { question: '', answer: '' };
  };

  locateToIndividualDeck = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: 'NewQuestionView' }));
  };


  submit = () => {
    const { question, answer }  = this.state;

    this.props.dispatch(addCard({ question, answer, deck }));

    this.setState(() => ({ question: '', answer: '' }));

    this.locateToIndividualDeck();

    addCardToDeck({ question, answer, deck });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter your question</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
        />
        <Text>Enter the answer</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
        />
        <TouchableOpacity
          style={ Platform.OS === 'ios'
            ? styles.iosSubmitBtn
            : styles.AndroidSubmitBtn
          }
          onPress={this.submit}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
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
  iosSubmitBtn: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: 'purple',
    padding: 10,
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
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
  return state;
};

export default connect(
  mapStateToProps,
)(NewQuestionView);
