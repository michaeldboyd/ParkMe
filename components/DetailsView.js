import  React, { Component } from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import { Card } from 'react-native-elements';

export default class DetailsView extends Component {
  constructor() {
    super()

    this.reserveClicked = this.reserveClicked.bind(this);
    this.reserveConfirmed = this.reserveConfirmed.bind(this);
    this.reserveCancelled = this.reserveCancelled.bind(this);

  }

  reserveClicked() {
    //insert redux reserve stuff here
    Alert.alert(
      'Confirm Action',
      'Make Reservation?',
      [
        {text: 'Make Reservation', onPress: this.reserveConfirmed},
        {text: 'Cancel', onPress: this.reserveCancelled, style: 'cancel'}
      ]
    );
  }

  reserveConfirmed() {
    //insert redux reserve stuff here
    let listing = this.props.navigation.state.params.listing;

  }

  reserveCancelled() {
    
  }
  
  render() {
    let listing = this.props.navigation.state.params.listing;
    console.log('listing', listing)
    return (
      <View style={styles.container}>
        <Image style={{marginBottom: 20, width: 200, height: 200}} source={{uri: listing.parking_image_path === null ? 'https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png' : listing.parking_image_path}}></Image>
        <Text style={{ marginBottom: 10 }}>{listing.first_name + " " + listing.last_name}</Text>
        <Text style={{ marginBottom: 10 }}>{listing.street_address}</Text>
        <Text style={{ marginBottom: 10 }}>{listing.cost_per_hour} per hour</Text>
        <Button onPress={this.reserveClicked} title="Reserve Listing"/>
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
      width: "100%",
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