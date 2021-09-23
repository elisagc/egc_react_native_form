import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const Input = ({field, handleOnChange, inputData}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={field.placeholder}
      keyboardType={field.type === 'text' ? 'default' : field.type}
      maxLength={field.maxLength}
      onChangeText={value => handleOnChange(value, field.id)}
      value={inputData[field.id]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(107,106,107,.1)',
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 10,
    height: 50,
  },
});
