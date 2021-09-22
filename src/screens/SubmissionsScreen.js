import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
export const SubmissionsScreen = () => {
  const {submissions} = useSelector(state => state.form);

  return (
    <View>
      {submissions.map(submission => (
        <Text>{submission.name}</Text>
      ))}
    </View>
  );
};
