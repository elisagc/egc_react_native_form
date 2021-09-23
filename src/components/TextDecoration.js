import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TextDecoration = () => {
  return (
    <>
      <View style={styles.line} />
      <View style={styles.smallCircle} />
      <View style={styles.bigCircle} />
    </>
  );
};
const styles = StyleSheet.create({
  line: {
    backgroundColor: 'rgba(255, 192, 203,.5)',
    height: 3,
    width: 60,
    position: 'absolute',
    bottom: 3,
  },
  smallCircle: {
    backgroundColor: 'rgba(255, 192, 203,.8)',
    width: 10,
    height: 10,
    position: 'absolute',
    top: 10,
    left: -15,
    borderRadius: 20,
  },
  bigCircle: {
    backgroundColor: 'rgba(255, 192, 203,.5)',
    width: 15,
    height: 15,
    position: 'absolute',
    top: 6,
    left: -19,
    borderRadius: 20,
  },
});
