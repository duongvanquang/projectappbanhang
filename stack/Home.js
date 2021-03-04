import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
const axios = require('axios')
import Products from '../components/Products';
import { connect } from 'react-redux';
import CartActions from '../redux/cart'

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { setProduct } = this.props
    axios.get('https://appbangiay.herokuapp.com/word')
      .then(function (response) {
        // handle success
        console.log(response.data.words);
      
        setProduct(response.data.words)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }

  render() {
    return (
      <View style={styles.container}>
        <Products navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
const mapStateToProps = (state) => {
  return ({
  });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
  return ({
    dispatch,
    setProduct: (product) => (dispatch(CartActions.setProduct(product)))
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);