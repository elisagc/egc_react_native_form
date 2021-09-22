import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
export const Button = ({handleSubmit}) => {
  return (
    <TouchableOpacity onPress={handleSubmit}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Enviar</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rgba(222,153,216,.8)',
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
