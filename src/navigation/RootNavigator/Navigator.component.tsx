import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from '../TabNavigator';
import DefaultModal from '../../screens/Refine';

const Stack = createStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigator} />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Filters" component={DefaultModal} />
          <Stack.Screen name="Vehicle" component={DefaultModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
