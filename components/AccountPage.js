import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default class SignInView extends React.Component {

    signOut() {
        this.props.navigation.state.params.signOut();
    }

    test() {
        console.log(JSON.stringify(this.props.navigation.state.params.user))
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 200, height: 200, marginBottom: 10}} 
                    source={{uri: "https://s3.us-east-2.amazonaws.com/park-me/users/blank-profile-picture.png"}} />
                <Text
                    style={{ marginBottom: 10 }}>{this.props.navigation.state.params.user.email}</Text>
                <Button title="Sign Out" onPress={() => this.signOut()} />
                {/* <Button title="Test" onPress={() => this.test()} /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
    }
})