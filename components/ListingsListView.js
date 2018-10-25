import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, ListView, Image } from "react-native";
import { Card, ListItem, Button, Header } from 'react-native-elements'
import tempPhoto from '../assets/parkingTempImage.jpg';
import ModalDropdown from 'react-native-modal-dropdown';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import SortTabBar from './SortTabBar';

const tempUsers = [
  {
    user_id: 1,
    first_name: "Max",
    last_name: "Bassett",
    email: "maxrbassett@gmail.com",
    zip_code: 84120,
    parking_spot: [{
      parking_id: 1,
      cost_per_hour: "$2.00",
      image_path: tempPhoto,
      description: "This is a parking spot about a mile from campus",
      street_address: "499 W. Fake Lane",
      city: "Provo",
      state: "UT",
      zipCode: 84120,
      reserved: false
    }]
  },
  {
    user_id: 1,
    first_name: "Max",
    last_name: "Bassett",
    email: "maxrbassett@gmail.com",
    zip_code: 84120,
    parking_spot: [{
      parking_id: 1,
      cost_per_hour: "$2.00",
      image_path: tempPhoto,
      description: "This is a parking spot about a mile from campus",
      street_address: "499 W. Fake Lane",
      city: "Provo",
      state: "UT",
      zipCode: 84120,
      reserved: false
    }]
  },
  {
    user_id: 1,
    first_name: "Max",
    last_name: "Bassett",
    email: "maxrbassett@gmail.com",
    zip_code: 84120,
    parking_spot: [{
      parking_id: 1,
      cost_per_hour: "$2.00",
      image_path: tempPhoto,
      description: "This is a parking spot about a mile from campus",
      street_address: "499 W. Fake Lane",
      city: "Provo",
      state: "UT",
      zipCode: 84120,
      reserved: false
    }]
  },
  {
    user_id: 1,
    first_name: "Max",
    last_name: "Bassett",
    email: "maxrbassett@gmail.com",
    zip_code: 84120,
    parking_spot: [{
      parking_id: 1,
      cost_per_hour: "$2.00",
      image_path: tempPhoto,
      description: "This is a parking spot about a mile from campus",
      street_address: "499 W. Fake Lane",
      city: "Provo",
      state: "UT",
      zipCode: 84120,
      reserved: false
    }]
  },
  {
    user_id: 1,
    first_name: "Max",
    last_name: "Bassett",
    email: "maxrbassett@gmail.com",
    zip_code: 84120,
    parking_spot: [{
      parking_id: 1,
      cost_per_hour: "$2.00",
      image_path: tempPhoto,
      description: "This is a parking spot about a mile from campus",
      street_address: "499 W. Fake Lane",
      city: "Provo",
      state: "UT",
      zipCode: 84120,
      reserved: false
    }]
  },
  {
    user_id: 1,
    first_name: "Max",
    last_name: "Bassett",
    email: "maxrbassett@gmail.com",
    zip_code: 84120,
    parking_spot: [{
      parking_id: 1,
      cost_per_hour: "$2.00",
      image_path: tempPhoto,
      description: "This is a parking spot about a mile from campus",
      street_address: "499 W. Fake Lane",
      city: "Provo",
      state: "UT",
      zipCode: 84120,
      reserved: false
    }]
  },

]

export default class ListingListView extends Component {
  constructor(){
    super()

    this.reserveClicked = this.reserveClicked.bind(this);

  }
  reserveClicked(listing, user) {
    console.log('user', user);
    const { navigate } = this.props.navigation;
    navigate('Details', { listing: listing, user: user});
  }
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
              return user.parking_spot.map((spot, ind) => {
                return (
                  <Card key={index} style={styles.listContainer} containerStyle={{ padding: 0 }} image={spot.image_path} >
                    <Text style={{ marginBottom: 10 }}>{spot.city}</Text>
                    <Button
                      icon={{ name: 'code' }}
                      onPress={() => this.reserveClicked(spot, user)}
                      backgroundColor='#3D6DCC'
                      buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                      title='Reserve' />
                  </Card>
                )
              })
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