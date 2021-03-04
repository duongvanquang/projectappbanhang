import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Image } from 'react-native'
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './stack/Home';
import Profile from './stack/Profile';
import Settings from './stack/Settings';
import Giohang from './components/Giohang';
import Filter from './components/Filter';
import Thongbao from './tab/Thongbao';
import Canhan from './tab/Canhan';
import Login from './stack/Login';

const Tab = createBottomTabNavigator();
const reducers = combineReducers({
  cart: require('./redux/cart').reducer,
})

const home = require('./components/home.png')
const bell = require('./components/bell_icon_128467.png')
const infor = require('./components/personal-information-interface-symbol.png')
const store = createStore(reducers);
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let source;
          if (route.name === 'Trang chu') {
            source = home
          } else if (route.name === 'Thông báo') {
            source = bell
          } else if (route.name === 'Cá nhân') {
            source = infor
          }
          // You can return any component that you like here!
          return <Image
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
            source={source} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Stack.Screen name= "Trang chu" component={Home} />
      <Tab.Screen name= "Thông báo" component={Thongbao} />
      <Tab.Screen name= "Cá nhân" component={Canhan} />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
class AppStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Đăng Nhâp" component={Login} />
          <Stack.Screen name="Trang chu" component={MyTabs} />
          <Stack.Screen name="Cart" component={Giohang} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Filter" component={Filter} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App = () => (
  <Provider store={store}>
    <AppStack />
  </Provider>
);
