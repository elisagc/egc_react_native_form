import React from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from '../components/Button';
import {InputList} from '../components/InputList';
import {useForm} from '../hooks/useForm';

export const HomeScreen = () => {
  const {top, bottom} = useSafeAreaInsets();

  const {handleOnChange, handleSubmit, inputData, formFields, disabledBtn} =
    useForm();

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      contentContainerStyle={{}}>
      <ScrollView
        contentContainerStyle={{
          ...styles.container,
          marginTop: top,
          marginBottom: bottom,
        }}
        keyboardShouldPersistTaps="handled">
        <InputList
          formFields={formFields}
          handleOnChange={handleOnChange}
          inputData={inputData}
        />
        <Button handleSubmit={handleSubmit} disabled={disabledBtn} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
});
