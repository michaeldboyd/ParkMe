import { React, Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class ListingDisplayView extends Component {

  _onPressButton() {
    //insert redux reserve stuff here
    Alert.alert('You tapped the button!')
  }
  
  render() {
    let {listing} = this.props
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          leftComponent={{ text: 'Listings', color: '#fff' }}
          centerComponent={{ text: 'Details', style: { color: '#fff' } }}
          rightComponent={{ icon: 'search', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
        />
        <Text>{listing.name}</Text>
        <Text>{listing.address}</Text>
        <Text>{listing.price}</Text>
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