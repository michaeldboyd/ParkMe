import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect, Provider } from "react-redux";
import actions from "../actions/toggleActions";
import store from "../store/store";

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
        <Button title="New Page" onPress={() =>
            this.props.navigation.navigate('OtherPage')
          } />
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


const mapStateToProps = state => ({
  isToggled: state.toggle.isToggled
});

const mapDispatchToProps = (dispatch) => {
  return {
    setToggleStatus: (status) => dispatch(actions.setToggleStatus(status))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
