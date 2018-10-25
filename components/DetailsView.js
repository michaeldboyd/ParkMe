import  React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Header } from 'react-native-elements';

export default class DetailsView extends Component {

  _onPressButton() {
    //insert redux reserve stuff here
    Alert.alert('You tapped the button!')
  }
  
  render() {
    let user = this.props.navigation.state.params.user;
    let listing = this.props.navigation.state.params.listing;
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{ text: 'Listings', color: '#fff' }}
          centerComponent={{ text: 'Details', style: { color: '#fff' } }}
          rightComponent={{ icon: 'search', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
        />
        <Text>{user.first_name + " " + user.last_name}</Text>
        <Text>{listing.street_address}</Text>
        <Text>{listing.cost_per_hour}</Text>
        <Button onPress={this._onPressButton} title="Reserve Listing"/>
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
    }
  });