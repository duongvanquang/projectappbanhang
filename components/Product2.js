import React, { Component } from 'react';
import {
    View, Image,
    StyleSheet, Dimensions,
    Text, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import CartActions from '../redux/cart'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }
    render() {
        const { product ,addPluscart} = this.props
        const { uri = '', price, name, shop } = product
        return (
            <View
                activeOpacity={0.5}
                style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.colortext}>{price}</Text>
                </View>
                <View style={styles.textww}>
                    <Image
                        style={styles.imageProduct}
                        source={{ uri }} />
                    <View style={styles.contaiberbutton}>
                        <TouchableOpacity
                            onPress={() => {
                                addPluscart({ ...product, count: this.state.count + 1 })
                                this.setState({ count: this.state.count + 1 })
                            }}
                        >
                            <Text style={styles.textcontainer}>+</Text>
                        </TouchableOpacity>
                        <Text style={styles.qqt}>{this.state.count}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                if (this.state.count !== 0) {
                                    addPluscart({ ...product, count: this.state.count + 1 })
                                    this.setState({ count: this.state.count - 1 })
                                }

                            }}
                        >
                            <Text style={styles.textcontainer}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.removeCart(product)
                            this.props.navigation.navigate('Cart')
                        }}
                        style={styles.buttonAddCart}>
                        <Text style={styles.textremove}>DELETE</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.colorimage}> {name}</Text>
                <Text style={styles.textcolor}>{shop}</Text>
            </View>
        );
    }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 2) - 20
const widthImage = Math.round(width / 2) - 20
const mapStateToProps = (state) => {
    return ({
    });
};
const mapDispatchToProps = (dispatch) => { //eslint-disable-line
    return ({
        removeCart: (product) => (dispatch(CartActions.removeCart(product))),
        addPluscart: (product) => (dispatch(CartActions.addPluscart(product)))
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Product)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,

    },
    imageProduct: {
        width: widthImage,
        height: heightImage,
        alignSelf: 'center',
        borderRadius: 10

    },
    viewTitle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
    colortext: {
        color: 'red',
        fontWeight: 'bold'
    },
    colorimage: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5
    },
    textcolor: {
        color: 'blue',
        fontWeight: 'bold',
        marginTop: 5

    },
    contaiberbutton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 100, marginTop: 10,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderRadius: 5
    },
    textcontainer: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold'
    },
    textremove: {
        color: 'red',
        marginTop: 10,
        fontSize: 20
    },
    textww: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    qqt: {
        marginTop: 3,
        color: '#009900',
        fontSize: 20,
        fontWeight: 'bold'
    }

})