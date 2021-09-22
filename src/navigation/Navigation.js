import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {SubmissionsScreen} from '../screens/SubmissionsScreen';

export const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SubmissionsScreen" component={SubmissionsScreen} />
    </Stack.Navigator>
  );
};
