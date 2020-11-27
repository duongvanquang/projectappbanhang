import React, { Component } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
            onPress={() => this.props.navigation.popToTop()}
            style={{backgroundColor: 'red', padding: 10}}>
            <Text>Navigate Home</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
