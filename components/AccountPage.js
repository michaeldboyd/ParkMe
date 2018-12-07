import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class SignInView extends React.Component {

    signOut() {
        this.props.navigation.state.params.signOut();

    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Test :)</Text>
                <Button title="Sign Out" onPress={() => this.signOut()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    }
})