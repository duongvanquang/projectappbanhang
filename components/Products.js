import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Filter from './Filter';
import Giohang from './Giohang';
import Product from './Product'

const cart = require('./shopping-cart.png')
const carts = require('./messenger.png')
const cartss = require('./verify.png')

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderProduct = ({ item: product }) => {
        const { navigation } = this.props
        return (<Product navigation={navigation} product={product} />)
    }
    render() {
        const { products } = this.props
        console.log({ products: products.length })
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={styles.touchble}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Filter')}
                        style={styles.containerview}>
                        <Image
                            source={cartss}
                            style={styles.textfind}
                        />
                    </TouchableOpacity>
                    <View>
                        <Image
                            source={carts}
                            style={styles.textimage}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Cart', { Giohang })}>
                        <Image
                            source={cart}
                            style={[styles.textimage, { tintColor: 'gray' }]}
                        />
                        <View style={styles.viewBadge}>
                            <Text style={styles.textBadge}>{this.props.cart.length}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.container}
                    data={products}
                    renderItem={this.renderProduct}
                    numColumns={2}
                    ListHeaderComponent={() => (<View height={5} />)}
                    ListFooterComponent={() => (<View height={5} />)}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        products: state?.cart?.products,
        cart: state?.cart?.cart
    });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
    return ({
        dispatch,
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);

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
    viewBadge: {
        position: 'absolute',
        top: 0,
        right: 10,
    },
    textBadge: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold'
    }

})