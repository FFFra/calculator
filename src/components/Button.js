import React from 'react';
import {Text, Dimensions, TouchableHighlight, StyleSheet} from 'react-native';

export default props => {
  const stylesButton = [styles.button];
  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.triple) stylesButton.push(styles.buttonTripple);
  if (props.operation) stylesButton.push(styles.operationButton);
  return (
    <TouchableHighlight onPress={() => props.onPress(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
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
    borderWidth: 0.2,
    borderColor: '#CBEEF3',
    color: '#FFFCF9',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#0B3C49',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTripple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});
