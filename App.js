import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect, Provider } from "react-redux";
import actions from "./actions/toggleActions";
import store from "./store/store";
import AppNavigator from './components/AppNavigator';

export default class TheApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
