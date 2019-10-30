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

export default class App extends Component {
  state = {
    displayValue: '0',
  };

  addDigit = n => {
    this.setState({displayValue: n});
  };

  clearMemory = () => {
    this.setState({displayValue: '0'});
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
            <Button label="/" operation onPress={this.setOperation('/')} />
            <Button label="7" onPress={() => this.addDigit(7)} />
            <Button label="8" onPress={() => this.addDigit(8)} />
            <Button label="9" onPress={() => this.addDigit(9)} />
            <Button label="*" operation onPress={this.setOperation('*')} />
            <Button label="4" onPress={() => this.addDigit(4)} />
            <Button label="5" onPress={() => this.addDigit(5)} />
            <Button label="6" onPress={() => this.addDigit(6)} />
            <Button label="-" operation onPress={this.setOperation('-')} />
            <Button label="1" onPress={() => this.addDigit(1)} />
            <Button label="2" onPress={() => this.addDigit(2)} />
            <Button label="3" onPress={() => this.addDigit(3)} />
            <Button label="+" operation onPress={this.setOperation('+')} />
            <Button label="0" double onPress={() => this.addDigit(0)} />
            <Button label="." onPress={() => this.addDigit('.')} />
            <Button label="=" operation onPress={this.setOperation('=')} />
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
