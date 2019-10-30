import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={styles.display}>
      <Text style={styles.dislayValues} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
  },
  dislayValues: {
    fontSize: 80,
    color: '#FFF',
  },
});
