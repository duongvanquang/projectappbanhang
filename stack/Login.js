import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn: '',
            txtVn: ''
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
                <View style={styles.containerTextInput}>
                    <TextInput
                        onChangeText={text => (this.state.txtEn = text)}
                        ref={refs => (this.textInputEn = refs)}
                        placeholder="Egmail"
                        style={styles.textInput}
                    />
                    <TextInput
                        onChangeText={text => (this.state.txtVn = text)}
                        ref={refs => (this.textInputVn = refs)}
                        placeholder="Password"
                        secureTextEntry
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.replace('Trang chu')
                    }}
                    activeOpacity={0.3}
                    style={{
                        backgroundColor: '#66CCFF',
                        width: 150, justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 120,
                        borderWidth: 1
                    }}>
                    <Text style={{ color: 'green', fontSize: 30 }}> Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containerTextInput: {
        width: '100%',
        height: 130,
        justifyContent: 'space-evenly',
    },
    textInput: {
        borderWidth: 1,
        height: 50,
        fontSize: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    }
})
