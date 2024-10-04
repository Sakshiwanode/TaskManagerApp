import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllTasksScreen from '../screens/AllTasksScreen';
import CompletedTasksScreen from '../screens/CompletedTasksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import CreateTaskScreen from '../screens/CreateTaskScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="AllTasks" 
        component={AllTasksScreen} 
        options={{ tabBarIcon: () => <Icon name="tasks" size={20} color='pink' /> }}
     
      />
       <Tab.Screen 
        name="Create Task" 
        component={CreateTaskScreen} 
        options={{ tabBarIcon: () => <Icon name="pencil" size={20} color='pink' /> }}
      /> 

      <Tab.Screen 
        name="CompletedTasks" 
        component={CompletedTasksScreen} 
        options={{ tabBarIcon: () => <Icon name="check" size={20} color='pink' /> }}
      />
     
    </Tab.Navigator>
  );
}
