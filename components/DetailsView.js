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
    let user = this.props.navigation.state.params.user;
    let listing = this.props.navigation.state.params.listing;
    return (
      <View style={styles.container}>
        <Image style={{marginBottom: 20, width: 200, height: 200}} source={listing.image_path}></Image>
        <Text style={{ marginBottom: 10 }}>{user.first_name + " " + user.last_name}</Text>
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