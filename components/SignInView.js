import React, { Component } from "react";

import { Keyboard, Text, StyleSheet, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';

const appId = "1047121222092614"

export default class LoginScreen extends Component {
    constructor() {
        super() 
        this.state = {
            username: "",
            password: "",
            err: ""
        }

        this.onChangeText = this.onChangeText.bind(this);
        this.onLoginPress = this.onLoginPress.bind(this);
        this.onCreateUserPress = this.onCreateUserPress.bind(this);
    }
    render() {
        return (
            <KeyboardAvoidingView style={ styles.containerView } behavior="padding">

                <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                    <View style={ styles.loginScreenContainer }>
                        <View style={ styles.loginFormView }>
                            <Text style={ styles.logoText }>parkME</Text>
                            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={ styles.loginFormTextInput } onChangeText={(val) => this.onChangeText("username", val)} />
                            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={ styles.loginFormTextInput } onChangeText={(val) => this.onChangeText("password", val)} secureTextEntry={ true } />
                            <Text style={this.state.err !== "" ? styles.errMessage : styles.hide}>{this.state.err}</Text>
                            <Button
                                buttonStyle={ styles.loginButton }
                                onPress={ () => this.onLoginPress() }
                                title="Login"
                            />
                            <Button
                                buttonStyle={ styles.loginButton }
                                onPress={ () => this.onCreateUserPress() }
                                title="Create New User"
                            />
                            <Button
                                buttonStyle={ styles.fbLoginButton }
                                onPress={ () => this.onFbLoginPress() }
                                title="Login with Facebook"
                                color="#3897f1"
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    setErr(err) {
        this.setState({err: err.message})
    }

    onChangeText(type, val) {
        this.setState({[type]: val, err: ""});
    }

    onLoginPress() {
        this.setState({err: ""})
        this.props.login("signIn", this.state.username, this.state.password)
    }

    onCreateUserPress() {
        this.setState({err: ""})
        this.props.login("createUser", this.state.username, this.state.password)
    }

    async onFbLoginPress() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
            permissions: ['public_profile', 'email'],
        });
        if (type === 'success') {
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert(
                'Logged in!',
                `Hi ${(await response.json()).name}!`,
            );
        }
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
    },
    loginScreenContainer: {
        flex: 1,
    },
    hide: {
        display: 'none'
    },
    errMessage: {
        color: "red",
        textAlign: "center"
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
    },
    loginFormView: {
        flex: 1
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,

    },
    loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
    fbLoginButton: {
        height: 45,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
})