import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import { Card } from 'react-native-elements';
import FooterTabs from "./Footer";


export default class DetailsView extends Component {
  constructor() {
    super()
    this.state = {
      reserved: 0
    }

    this.reserveClicked = this.reserveClicked.bind(this);
    this.reserveConfirmed = this.reserveConfirmed.bind(this);

    this.unreserveClicked = this.unreserveClicked.bind(this);
    this.unreserveConfirmed = this.unreserveConfirmed.bind(this);

    this.actionCancelled = this.actionCancelled.bind(this);

  }

  componentDidMount() {
    this.setState({ reserved: this.props.navigation.state.params.listing.is_reserved })
  }

  componentDidUpdate(){
    //console.log('state',this.state)
  }

  reserveClicked() {
    Alert.alert(
      'Confirm Action',
      'Make Reservation?',
      [
        { text: 'Make Reservation', onPress: this.reserveConfirmed },
        { text: 'Cancel', onPress: this.actionCancelled, style: 'cancel' }
      ]
    );
  }

  reserveConfirmed() {
    let listing = this.props.navigation.state.params.listing;
    fetch('http://3.16.22.45:3000/api/listing/'+listing.id, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "is_reserved": 1
      })
    })
      .then((response) => {
        response.text()
      })
      .then((dataResponse) => {
        this.props.navigation.state.params.getListings();
        this.setState({ reserved: 1 })
      })
  }

  unreserveClicked() {
    Alert.alert(
      'Confirm Action',
      'Undo this reservation?',
      [
        { text: 'Undo Reservation', onPress: this.unreserveConfirmed },
        { text: 'Cancel', onPress: this.actionCancelled, style: 'cancel' }
      ]
    );
  }

  unreserveConfirmed() {
    let listing = this.props.navigation.state.params.listing;
    fetch('http://3.16.22.45:3000/api/listing/'+listing.id, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "is_reserved": 0
      })
    })
      .then((response) => response.text())
      .then((dataResponse) => {
        this.props.navigation.state.params.getListings();
        this.setState({ reserved: 0 })
      })
  }

  actionCancelled() {
    console.log('cancelled choice')
  }

  render() {
    let listing = this.props.navigation.state.params.listing;
    return (
      <View style={styles.container}>
        <Image style={{ marginBottom: 20, width: 200, height: 200 }} source={{ uri: listing.parking_image_path === null ? 'https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png' : listing.parking_image_path }}></Image>
        <Text style={{ marginBottom: 10 }}>{listing.first_name + " " + listing.last_name}</Text>
        <Text style={{ marginBottom: 10 }}>{listing.street_address}</Text>
        <Text style={{ marginBottom: 10 }}>${listing.cost_per_hour} per hour</Text>
        {/* <Text style={{ marginBottom: 10 }}>{listing.description}</Text> */}
        {this.state.reserved === 1 ? (<Button onPress={this.unreserveClicked} title='Cancel Reservation' />) : (<Button onPress={this.reserveClicked} title='Reserve Listing' />)}

        <View style={styles.footerContainer}>
          <FooterTabs active={4} getListings={this.props.navigation.state.params.getListings} navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: "100%"
  },
  Text: {
    padding: "20%",
    margin: "20%"
  },
  Image: {
    padding: "20%",
    margin: "20%"
  }
});
