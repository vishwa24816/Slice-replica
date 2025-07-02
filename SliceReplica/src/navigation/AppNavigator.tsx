import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import PaymentsScreen from '../screens/PaymentsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { Text } from 'react-native'; // Import Text

// Placeholder for Tab Icons, replace with actual icons later
const TabBarIcon = (name: string, focused: boolean, color: string, size: number) => {
  // In a real app, you'd use an icon library like @expo/vector-icons or react-native-vector-icons
  let iconName;
  if (name === 'Dashboard') iconName = focused ? '🏠' : '🏡';
  else if (name === 'Transactions') iconName = focused ? '🧾' : '📜';
  else if (name === 'Payments') iconName = focused ? '💸' : '💵';
  return <Text style={{ color, fontSize: size }}>{iconName}</Text>;
};

function MainAppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => TabBarIcon(route.name, focused, color, size),
        tabBarActiveTintColor: '#F94C84', // Slice Pink
        tabBarInactiveTintColor: 'gray',
        headerShown: false, // We'll use stack navigator's header for these screens if needed
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainAppTabs} options={{ headerShown: false }} />
        {/* You can add more Stack screens here if needed, e.g., for profile, settings, etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

// Need to add Text to imports for TabBarIcon
// Also need to install @react-navigation/native, @react-navigation/native-stack, @react-navigation/bottom-tabs
// and their dependencies: react-native-screens, react-native-safe-area-context
