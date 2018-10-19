import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, ListView, Image } from "react-native";
import { Card, ListItem, Button, Header } from 'react-native-elements'
import tempPhoto from '../assets/parkingTempImage.jpg';

const tempUsers = [
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
  onMenuPress() {
    console.log("CLICKED MENU!!!!!!!!!")
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'ParkMe', style: { color: '#fff' } }}
          rightComponent={{ icon: 'menu', color: '#fff', onPress: this.onMenuPress }}
        />
        <Text style={styles.listingsText}>Listings</Text>
        <ScrollView>
          <Card style={styles.listContainer} containerStyle={{ padding: 0 }} >
            {
              tempUsers.map((u, i) => {
                return (
                  <ListItem
                    key={i}
                    style={styles.listItem}
                    roundAvatar
                    title={u.city}
                    avatar={u.avatar}
                  />
                );
              })
            }
          </Card>
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