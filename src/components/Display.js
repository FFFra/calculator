import React from 'react';
import {View, Text} from 'react-native';

export default props => {
  return (
    <View style={styles.display}>
      <Text style={styles.dislayValues} numberOfLines={1}>
        {props.values}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
  },
  dislayValues: {
    fontSize: 60,
    color: '#FFF',
  },
});
