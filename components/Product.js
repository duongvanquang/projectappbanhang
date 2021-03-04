import React, { Component } from 'react';
import {
    View, Image,
    StyleSheet, Dimensions,
    Text, TouchableOpacity
} from 'react-native';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { product } = this.props
        const { uri = '', price, name, shop } = product
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Profile', { product })}
                activeOpacity={0.5}
                style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.colortext}>{price}</Text>
                </View>
                <Image
                    style={styles.imageProduct}
                    source={{ uri }} />
                <Text style={styles.colorimage}> {name}</Text>
                <Text style={styles.textcolor}>{shop}</Text>
            </TouchableOpacity>
        );
    }
}
const { height, width } = Dimensions.get('screen')
const heightImage = Math.round(width / 2) - 20
const widthImage = Math.round(width / 2) - 20

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

    }
})