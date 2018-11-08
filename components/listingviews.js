import { React, Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ListingCreateView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add a listing</Text>
      </View>
    );
  }
}

export default class ListingDisplayView extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>View a listing</Text>
        </View>
      );
    }
  }

//For later...
export default class ListingEditView extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>I can edit listings!</Text>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});