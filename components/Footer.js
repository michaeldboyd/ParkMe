import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class FooterTabs extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical active={this.props.active === 1} onPress={() => this.props.navigation.navigate("Home")}>
                        <Icon name="home" />
                        <Text>Listings</Text>
                    </Button>
                    <Button vertical onPress={() => this.props.navigation.navigate("Add")} active={this.props.active===2}>
                        <Icon name="add" />
                        <Text>Add</Text>
                    </Button>
                    <Button badge vertical active={this.props.active===3}>
                        <Badge><Text>2</Text></Badge>
                        <Icon name="person" />
                        <Text>Account</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}