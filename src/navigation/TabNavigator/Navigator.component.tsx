import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../utils/colors';

import Map from '../../screens/Map';
import Dashboard from '../DashboardNavigator';
import Default from '../../screens/Default';

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
        name="MapTab"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
        }}
      />
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
      <Tab.Screen
        name="ProfileTab"
        component={Default}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;
