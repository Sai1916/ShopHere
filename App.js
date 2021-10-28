import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StackContainer />
      <StatusBar barStyle="auto" />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const StackContainer = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default App;
