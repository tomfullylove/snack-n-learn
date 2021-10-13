import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../utils/colors';

import Default from '../../screens/Default';

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.text.main,
        tabBarInactiveTintColor: colors.text.faint,
        tabBarStyle: {
          backgroundColor: colors.background.main,
          borderTopWidth: 0,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Settings"
        component={Default}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
