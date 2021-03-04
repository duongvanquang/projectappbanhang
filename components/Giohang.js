import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Product2 from './Product2';

class Giohang extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderProduct = ({ item: product }) => {
    const { navigation } = this.props
    return (<Product2 navigation={navigation} product={product} />)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 8 }}>
          <FlatList
            style={styles.container}
            data={this.props.cart}
            renderItem={this.renderProduct}
            // numColumns={2}
            ListHeaderComponent={() => (<View height={5} />)}
            ListFooterComponent={() => (<View height={5} />)}
          />
        </View>
        <View style={styles.texttt}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Settings')}
            activeOpacity={0.5}
          >
            <Text style={styles.wwd}>  Thanh Toán </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    cart: state?.cart?.cart
  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    dispatch,
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Giohang);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    flex: 1,
    backgroundColor: 'white'
  },
  containerview: {
    flexDirection: 'row',
    height: 40,
    width: 250,
    marginTop: 2,
    marginHorizontal: 5,
    borderWidth: 0.4,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  touchble: {
    flexDirection: 'row',
    marginHorizontal: 5
  },
  textimage: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  textfind: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 5,
    marginLeft: 10,
    tintColor: 'gray'
  },
  texttt: {
    height: 60,
    backgroundColor: '#FF3399',
    borderWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  wwd:{
     color: 'white',
      fontSize: 30, 
      fontWeight: 'bold' 
    },

})
