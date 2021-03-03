import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Little from './screens/Little';
import Payment from './screens/Payment';
import Setting from './screens/Setting';
import { CartProvider } from './context/Cart.Context';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name='Little' component={Little}  options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
  )
}
export default App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'star'
                  : 'star-outline';
              } else if (route.name === 'Products') {
                iconName = focused ? 'fast-food' : 'fast-food-outline';
              } else if (route.name === 'Setting') {
                iconName = focused ? 'ios-alert-circle' : 'ios-alert-circle-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name='Home' component={HomeStack} />
          <Tab.Screen name='Products' component={Payment} />
          <Tab.Screen name='Setting' component={Setting} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  
});
