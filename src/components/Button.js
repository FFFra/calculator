import React from 'react';
import {Text, Dimensions, TouchableHighlight, StyleSheet} from 'react-native';

export default props => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <Text style={styles.button}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#A30B37',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#CBEEF3',
    color: '#FFFCF9',
  },
});
