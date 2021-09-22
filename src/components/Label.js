import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
export const Label = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <View
        style={{
          backgroundColor: 'rgba(222,153,216,.3)',
          height: 3,
          width: 60,
          position: 'absolute',
          bottom: 3,
        }}
      />

      <View
        style={{
          backgroundColor: 'rgba(222,153,216,.8)',
          width: 10,
          height: 10,
          position: 'absolute',
          top: 10,
          left: -15,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          backgroundColor: 'rgba(222,153,216,.5)',
          width: 15,
          height: 15,
          position: 'absolute',
          top: 6,
          left: -19,
          borderRadius: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    color: 'rgba(222,153,216,.7)',
    fontWeight: 'bold',
  },
});
