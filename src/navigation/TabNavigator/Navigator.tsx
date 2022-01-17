import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '@utils/colors';

import {DashboardNavigator, QuoteNavigator} from '@navigation';

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.text.main,
        tabBarInactiveTintColor: colors.text.faint,
        tabBarStyle: {
          backgroundColor: colors.background.sub,
          borderTopWidth: 0,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="QuoteNavigator"
        component={QuoteNavigator}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DashboardTab"
        component={DashboardNavigator}
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
