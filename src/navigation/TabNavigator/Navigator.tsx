import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '@utils/colors';

import Dashboard from '@navigation/DashboardNavigator';

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashboardTab"
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
        name="DashboardTab"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="speedometer-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
