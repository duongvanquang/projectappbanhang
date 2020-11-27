import React, { Component } from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './stack/Home';
import Profile from './stack/Profile';
import Settings from './stack/Settings';
import Giohang from './components/Giohang';



const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name = "Home" component={Home}/>
          <Stack.Screen  name = "Profile" component={Profile}/>
          <Stack.Screen  name = "Cart" component={Giohang}/>
          <Stack.Screen  name = "Settings" component={Settings}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
