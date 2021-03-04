import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Login from '../stack/Login'

export default class Canhan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const avatar = require('./avatar.png')
    const email = require('./email.png')
    const interests = require('./interests.png')
    const travel = require ('./travel.png')
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 0.4, backgroundColor: 'yellow', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, borderRadius: 50, backgroundColor: 'white', borderWidth: 1 }}>
            <Image
              source={avatar}
              style={{ height: 200, width: 200, marginTop: 10 }}
            />
          </View>
        </View>
        <View style={{ flex: 0.6, flexDirection: 'column', borderBottomWidth: 1,backgroundColor:'#FF66CC' }}>
          <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 10, backgroundColor: '#33CC33', borderWidth: 1 }}>
            <Image
              source={email}
              style={{ width: 60, height: 50 }}
            />
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 25 }}> email:</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 10, backgroundColor: '#33CC33', borderWidth: 1 }}>
            <Image
              source={interests}
              style={{ width: 60, height: 50 }}
            />
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 25 }}> Sở thích: </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 10, backgroundColor: '#33CC33', borderWidth: 1 }}>
            <Image
              source={travel}
              style={{ width: 60, height: 50 }}
            />
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, marginTop: 25 }}> Du lịch: </Text>
          </View>
        </View>
      </View>
    );
  }
}
