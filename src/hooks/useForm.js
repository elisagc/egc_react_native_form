import {useNavigation} from '@react-navigation/core';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addSubmission} from '../store/actions/form';

export const useForm = () => {
  const dispatch = useDispatch();
  const {formFields} = useSelector(state => state.form);

  const navigation = useNavigation();

  const [inputData, setInputData] = useState({});
  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    setInputData(getInitialInputs());
  }, [formFields]);

  useEffect(() => {
    setDisabledBtn(isDisabledBtn());
  }, [inputData]);

  const isDisabledBtn = () => {
    const values = Object.values(inputData);
    const isEmpty = values.length === 0 || values.some(val => val.length === 0);
    return isEmpty;
  };

  const getInitialInputs = () => {
    return formFields.reduce((acc, field) => {
      const key = field.id;
      return {...acc, [key]: ''};
    }, {});
  };

  const handleOnChange = (value, field) => {
    setInputData({...inputData, [field]: value});
  };

  const handleSubmit = () => {
    dispatch(addSubmission(inputData));
    setInputData(getInitialInputs());
    navigation.navigate('SubmissionsScreen');
  };

  return {
    handleOnChange,
    handleSubmit,
    inputData,
    formFields,
    disabledBtn,
  };
};
