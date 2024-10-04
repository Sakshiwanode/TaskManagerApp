// src/components/CustomTabBar.tsx
import React from 'react';
import { Text } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomTabBar = (props:any) => {
  return (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color }}>{route.title}</Text>
      )}
      renderIcon={({ route, focused, color }) => {
        // Provide a default icon name if route.icon is undefined
        const iconName = route.icon || 'question'; // Default to 'question' icon
        return <Icon name={iconName} size={20} color={color} />;
      }}
      style={{ backgroundColor: 'white' }} // Customize your tab bar styles here
    />
  );
};

export default CustomTabBar;
