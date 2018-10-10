import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect, Provider } from "react-redux";
import actions from "./actions/toggleActions";
import store from "./store/store";

class App extends React.Component {
  onPress = () => {
    this.props.setToggleStatus(!this.props.isToggled);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Is this ParkMe?</Text>
        <Button title="Click Me!" onPress={this.onPress} />
        <Text>{this.props.isToggled ? "toggled" : "not toggled"}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isToggled: state.toggle.isToggled
});

const mapDispatchToProps = dispatch => ({
  setToggleStatus: status => dispatch(actions.setToggleStatus(status))
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default class TheApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
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
