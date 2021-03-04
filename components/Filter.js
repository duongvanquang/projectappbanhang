import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Product from '../components/Product';
import CartActions from '../redux/cart'
import Home from '../stack/Home';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: 0
    };
  }

  renderItem = (title, number) => {
    const choose = this.state[number]
    return (
      <View style={styles.tainer}>
        <View style={styles.containertt}>
          <Text style={styles.textqq}>{title} </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ [number]: !choose })
          }}
          style={styles.checkbok}>
          {choose && <View style={styles.checkbokk}>
          </View>}
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.containerveiw}>
            {this.renderItem(
              'Tất Cả',
              'all'
            )}
            {this.renderItem(
              'Nam',
              'Men'
            )}
            {this.renderItem(
              'Nữ',
              'Woman'
            )}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            const { all, Men, Woman } = this.state
            this.props.filterMode({ all, Men, Woman })
            this.props.navigation.navigate('Trang chu')

          }}
          style={styles.textfilter}>
          <Text style={styles.textxn}> Xác Nhận </Text>
        </TouchableOpacity>
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
    filterMode: (product) => (dispatch(CartActions.filterMode(product)))
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
const styles = StyleSheet.create({
  containerveiw: {
    flex: 1,
    paddingHorizontal: 15
  },
  containerText: {
    color: '#CD853F',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
  },
  tainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    justifyContent: 'space-between',
    borderBottomWidth: 1

  },
  image: {
    width: 30,
    height: 40,
    marginTop: 10
  },
  containertt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  textqq: {
    fontSize: 20,
    marginLeft: 15,
  },
  checkbok: {
    borderRadius: 15,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderWidth: 2,
    marginTop: 10,
    borderColor: 'gray'
  },
  checkbokk: {
    borderRadius: 10,
    backgroundColor: 'blue',
    width: 20,
    height: 20,

  },
  textfilter: {
    backgroundColor: 'green',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textxn: {
    color: 'white',
    fontSize: 30
  },



})
