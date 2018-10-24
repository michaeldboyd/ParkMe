import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, ListView, Image } from "react-native";
import { Card, ListItem, Button, Header } from 'react-native-elements'
import tempPhoto from '../assets/parkingTempImage.jpg';
import ModalDropdown from 'react-native-modal-dropdown';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import SortTabBar from './SortTabBar';

const tempUsers = [
  {
    avatar: tempPhoto,
    address: '499 W. Fake Lane, Provo UT, 84120',
    street: '499 W. Fake Lane',
    city: 'Provo, Ut',
    zip: '84120',
    reserved: false,
  },
  {
    avatar: tempPhoto,
    address: '499 W. Fake Lane, Provo UT, 84120',
    street: '499 W. Fake Lane',
    city: 'Provo, Ut',
    zip: '84120',
    reserved: false,
  },
  {
    avatar: tempPhoto,
    address: '499 W. Fake Lane, Provo UT, 84120',
    street: '499 W. Fake Lane',
    city: 'Provo, Ut',
    zip: '84120',
    reserved: false,
  },
  {
    avatar: tempPhoto,
    address: '499 W. Fake Lane, Provo UT, 84120',
    street: '499 W. Fake Lane',
    city: 'Provo, Ut',
    zip: '84120',
    reserved: false,
  },

]

export default class ListingListView extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Header
          placement="left"
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'Listings', style: { color: '#fff' } }}
          rightComponent={{ icon: 'search', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
        />
        <SortTabBar />
        <ScrollView>
          {
            tempUsers.map((user, index) => {
              return (
                <Card key={index} style={styles.listContainer} containerStyle={{ padding: 0 }} image={user.avatar} >
                  <Text style={{ marginBottom: 10 }}>{user.city}</Text>
                  <Button
                    icon={{ name: 'code' }}
                    backgroundColor='#3D6DCC'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='Reserve' />
                </Card>
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0,
    width: "100%",
  },
  listContainer: {
    padding: 0
  },
  listingsText: {
    margin: 20,
    fontSize: 30
  },
  listItem: {
    padding: 0,
    flex: 1
  }

});