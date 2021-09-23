import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from './Input';
import {Label} from './Label';

export const InputList = ({formFields, handleOnChange, inputData}) => {
  return (
    <View style={styles.container}>
      {formFields.map(field => (
        <View key={field.id} style={styles.box}>
          <Label text={field.label} />
          <Input
            field={field}
            handleOnChange={handleOnChange}
            inputData={inputData}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  box: {
    marginTop: 30,
  },
});
