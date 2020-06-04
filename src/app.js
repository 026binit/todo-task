/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import HomeScreen from './Screen/Home';

import { store } from './redux/sotre';

const Stack = createStackNavigator();

/* 
 navigation container 
*/

export default function App() {
  return (
     <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
     </Provider>
  );
}