import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, ListView, Image, ActivityIndicator } from "react-native";
import { Card, ListItem, Button, Header } from 'react-native-elements'
import tempPhoto from '../assets/parkingTempImage.jpg';
import ModalDropdown from 'react-native-modal-dropdown';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import SortTabBar from './SortTabBar';
import FooterTabs from "./Footer";

export default class ListingListView extends Component {
  constructor() {
    super()
    this.state = {
      listings: []
    }
    this.reserveClicked = this.reserveClicked.bind(this);
    this.getListings = this.getListings.bind(this);

  }

  componentDidMount() {
    this.getListings();
    // setInterval(() => {
    //   this.getListings();
    // }, 5000);
  }

  getListings() {
    fetch('http://3.16.22.45:3000/api/listings')
      .then((response) => response.json())
      .then((jsonResponse) => {
        var filteredArray = jsonResponse.listings.filter((listing) => listing.state === "AK")
        this.setState({ listings: filteredArray.reverse() })
      })
  }

  reserveClicked(listing) {
    const { navigate } = this.props.navigation;
    navigate('Details', { listing: listing });
  }
  render() {
    return (
      <View style={styles.container}>
        <SortTabBar />
        <ScrollView>
          {
            this.state.listings.length > 0 ?
              this.state.listings.map((spot, index) => {
                if (index !== 0) {
                  //I don't want to do the first one for right now because the image path isn't valid.
                  return (
                    <Card key={index} style={styles.listContainer} containerStyle={{ padding: 0 }} image={{ uri: spot.parking_image_path === null ? 'https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png' : spot.parking_image_path }} >
                      <Text style={{ marginBottom: 10 }}>{spot.city}, {spot.state}</Text>
                      <Button
                        icon={spot.is_reserved === 1 ? {name: 'error'} : { name: 'check' }}
                        onPress={() => this.reserveClicked(spot)}
                        backgroundColor={spot.is_reserved===1? 'rgba(0,0,0,.5)' : '#3D6DCC'}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title={spot.is_reserved === 1 ? 'View Details':'Reserve'}/>
                    </Card>
                  )
                }
              })
              :
              <View style={styles.spinner}>
                <ActivityIndicator color="black" size="small" />
              </View>
          }
        </ScrollView>
        <View style={styles.footerView}>
        </View>
        <FooterTabs active={1} navigation={this.props.navigation} />
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
  spinner: {
    alignSelf: "center",
    justifyContent: 'space-around'
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
  },

});