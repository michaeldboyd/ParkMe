import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SortTabButton from './SortTabButton';

export default class SortTabBar extends React.Component {
    constructor() {
        super()

        this.state = {
            selected: 1
        }
        this.changeFocus = this.changeFocus.bind(this);
    }

    changeFocus(selected) {
        this.setState({selected})
    }

    render() {
        return (
            <View style={styles.container}>
                <SortTabButton focused={this.state.selected==1} number={1} changeFocus={this.changeFocus} title="By Location" />
                <SortTabButton focused={this.state.selected==2} number={2} changeFocus={this.changeFocus} title="By Distance" />
                <SortTabButton focused={this.state.selected==3} number={3} changeFocus={this.changeFocus} title="By Rating" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingRight: 20,
        paddingLeft: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
    },
})
