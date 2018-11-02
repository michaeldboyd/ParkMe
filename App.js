import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect, Provider } from "react-redux";
import actions from "./actions/toggleActions";
import store from "./store/store";
import ListingsListView from './components/ListingsListView';

class App extends React.Component {
  onPress = () => {
    this.props.setToggleStatus(!this.props.isToggled);
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text> HELLO WORLD!</Text> */}
        <ListingsListView />
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
import AppNavigator from './components/AppNavigator';
import FooterTabs from "./components/Footer";

export default class TheApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
