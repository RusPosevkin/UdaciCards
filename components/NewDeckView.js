import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class NewDeckView extends Component {
  onSubmit() {

  };

  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
        />
        <TouchableOpacity
          onPress={this.onSubmit}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
