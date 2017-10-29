import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class IndividualDeckView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>IndividualDeckView</Text>
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
});

function mapStateToProps(state) {
  return state;
};

export default connect(
  mapStateToProps,
)(IndividualDeckView);
