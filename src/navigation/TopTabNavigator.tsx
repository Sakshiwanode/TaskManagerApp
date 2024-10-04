import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllTasksScreen from '../screens/AllTasksScreen';
import CompletedTasksScreen from '../screens/CompletedTasksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import CreateTaskScreen from '../screens/CreateTaskScreen';

// Create the top tab navigator
const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = 'question'; // Default icon name

          if (route.name === 'AllTasks') {
            iconName = 'tasks';
          } else if (route.name === 'CompletedTasks') {
            iconName = 'check';
          } else if (route.name === 'Create Task') {
            iconName = 'plus';
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
        tabBarShowIcon: true, // Ensure icons are shown
        tabBarIndicatorStyle: { backgroundColor: 'blue' }, // Customize the indicator
      })}
    >
      <Tab.Screen 
        name="AllTasks" 
        component={AllTasksScreen} 
        options={{ tabBarLabel: 'All Tasks' }} 
      />
      <Tab.Screen 
        name="CompletedTasks" 
        component={CompletedTasksScreen} 
        options={{ tabBarLabel: 'Completed Tasks' }} 
      />
      <Tab.Screen 
        name="Create Task" 
        component={CreateTaskScreen} 
        options={{ tabBarLabel: 'Create Task' }} 
      />
    </Tab.Navigator>
  );
}
