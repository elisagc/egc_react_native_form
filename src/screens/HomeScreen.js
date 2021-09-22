import React, {useState, useEffect} from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from '../components/Button';
import {InputList} from '../components/InputList';

import {useSelector, useDispatch} from 'react-redux';
import {addSubmission} from '../store/actions/form';

export const HomeScreen = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  const [inputData, setInputData] = useState();

  const dispatch = useDispatch();
  const {formFields} = useSelector(state => state.form);
  const {submissions} = useSelector(state => state.form);

  useEffect(() => {
    console.log('🚀 ~ submissions', submissions);
  }, [submissions]);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleOnChange = (value, field) => {
    setInputData({...inputData, [field]: value});
  };

  const handleSubmit = () => {
    dispatch(addSubmission(inputData));
    navigation.navigate('SubmissionsScreen');
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView
        contentContainerStyle={{
          ...styles.container,
          marginTop: top,
          marginBottom: bottom,
        }}
        keyboardShouldPersistTaps="handled">
        <InputList formFields={formFields} handleOnChange={handleOnChange} />
        <Text>{JSON.stringify(submissions, null, 3)}</Text>
        <Button handleSubmit={handleSubmit} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
});
