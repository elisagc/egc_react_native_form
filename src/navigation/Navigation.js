import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {SubmissionsScreen} from '../screens/SubmissionsScreen';

export const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SubmissionsScreen"
        component={SubmissionsScreen}
        options={{
          title: 'Submissions',
          headerBackTitle: '',
          headerStyle: {backgroundColor: '#7159c1'},
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'pink'},
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
