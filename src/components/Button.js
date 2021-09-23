import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

export const Button = ({handleSubmit, disabled}) => {
  return (
    <TouchableOpacity
      onPress={handleSubmit}
      disabled={disabled}
      style={{marginHorizontal: 20, paddingHorizontal: 20}}>
      <View style={[styles.btn, disabled && styles.btnDisabled]}>
        <Text style={styles.btnText}>Enviar</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rgba(102, 205, 170,.9)',
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnDisabled: {
    backgroundColor: 'rgba(102, 205, 170,.3)',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
