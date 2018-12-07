import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SignInView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Test :)</Text>
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