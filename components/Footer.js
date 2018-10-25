import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class FooterTabs extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button active vertical>
                        <Icon name="home" />
                    </Button>
                    <Button vertical>
                        <Icon name="add" />
                    </Button>
                    <Button badge vertical>
                        <Badge><Text>2</Text></Badge>
                        <Icon name="person" />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}