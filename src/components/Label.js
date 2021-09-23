import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextDecoration} from './TextDecoration';

export const Label = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <TextDecoration />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    color: 'rgba(219,112,147,.6)',
    fontWeight: 'bold',
  },
});
