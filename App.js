/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  state = {...initialState};

  addDigit = n => {
    if (n === '.' && this.state.displayValue.includes('.')) {
      return;
    }
    console.log(this.state.displayValue);

    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({displayValue, clearDisplay: false});

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  };

  clearMemory = () => {
    this.setState({...initialState});
  };

  setOperation = operation => {};

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Display value={this.state.displayValue} />
          <View style={styles.button}>
            <Button label="AC" triple onPress={this.clearMemory} />
            <Button label="/" operation onPress={this.setOperation} />
            <Button label="7" onPress={this.addDigit} />
            <Button label="8" onPress={this.addDigit} />
            <Button label="9" onPress={this.addDigit} />
            <Button label="*" operation onPress={this.setOperation} />
            <Button label="4" onPress={this.addDigit} />
            <Button label="5" onPress={this.addDigit} />
            <Button label="6" onPress={this.addDigit} />
            <Button label="-" operation onPress={this.setOperation} />
            <Button label="1" onPress={this.addDigit} />
            <Button label="2" onPress={this.addDigit} />
            <Button label="3" onPress={this.addDigit} />
            <Button label="+" operation onPress={this.setOperation} />
            <Button label="0" double onPress={this.addDigit} />
            <Button label="." onPress={this.addDigit} />
            <Button label="=" operation onPress={this.setOperation} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
