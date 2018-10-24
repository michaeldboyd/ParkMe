import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class SortTabButton extends React.Component {
    constructor(props){
        super(props)
        this.handlePress = this.handlePress.bind(this);
    }
    
    handlePress() {
        this.props.changeFocus(this.props.number);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress}>
                <Text style={this.props.focused ? styles.focused : styles.unfocused}>{this.props.title}</Text>
                <View style={[styles.tabLine, this.props.focused ? null : styles.dontDisplay]}></View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    unfocused: {
        color: "#aaa"
    },
    focused: {
        color: '#3D6DCC'
    },
    tabLine: {
        backgroundColor: '#3D6DCC',
        height: 5,
        width: "70%",
        alignSelf: 'center',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        marginTop: 15
    },
    dontDisplay: {
        backgroundColor: 'rgba(0,0,0,0)',
    }
})