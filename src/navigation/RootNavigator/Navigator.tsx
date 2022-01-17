import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {TabNavigator} from '@navigation';

const Stack = createStackNavigator();

const Modal: React.FC = () => <></>;

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Filters" component={Modal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
