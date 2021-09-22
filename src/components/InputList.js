import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from './Input';
import {Label} from './Label';

export const InputList = ({formFields, handleOnChange}) => {
  return (
    <View>
      {formFields.map(field => (
        <View
          key={field.id}
          style={{
            marginTop: 20,
          }}>
          <Label text={field.label} />
          <Input field={field} handleOnChange={handleOnChange} />
        </View>
      ))}
    </View>
  );
};
