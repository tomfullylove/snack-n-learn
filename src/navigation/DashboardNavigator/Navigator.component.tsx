import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

import Default from '../../screens/Default';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {backgroundColor: colors.background.main},
      }}>
      <Stack.Screen
        name="Dashboard"
        component={Default}
        options={{
          headerLargeTitle: false,
          headerLargeTitleStyle: {
            color: colors.text.main,
            fontFamily: fonts.main.bold,
          },
          headerTitleStyle: {
            color: colors.text.main,
            fontFamily: fonts.main.bold,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
