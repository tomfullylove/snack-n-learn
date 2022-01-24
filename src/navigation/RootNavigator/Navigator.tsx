import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {TabNavigator} from '@navigation';

import {PersonalInfo, CarInfo} from '@components/modals';

const Stack = createStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
          <Stack.Screen name="CarInfo" component={CarInfo} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
