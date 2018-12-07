import React from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";
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
      <View style={ styles.container }>
        {/* <Text> HELLO WORLD!</Text> */ }
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
import SignInView from './components/SignInView';
import firebase from 'firebase/app';
import 'firebase/auth';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAGMOIbQe6vmGIvqY6xnKxeaAgSGvfQIW0",
  authDomain: "park-me-42.firebaseapp.com",
  databaseURL: "https://park-me-42.firebaseio.com",
  projectId: "park-me-42",
  storageBucket: "park-me-42.appspot.com",
  messagingSenderId: "261277652816"
};
const firebaseApp = firebase.initializeApp(config);

export default class TheApp extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }

    this.login = this.login.bind(this);
    this.signInView = React.createRef();

  }

  componentDidMount() {
    this.authSubscription = firebaseApp.auth().onAuthStateChanged((user) => {
      this.setState({ user, loading: false })
    })
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  signOut() {
    firebaseApp.auth().signOut();
  }

  login(type, email, password) {
    if (type === "signIn") {
      firebaseApp.auth().signInWithEmailAndPassword(email, password).catch((err) => {
        this.signInView.current.setErr(err)
      })
    } else {
      firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch((err) => {
        this.signInView.current.setErr(err)
      })
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={ styles.loading }>
          <ActivityIndicator size="large" color="black" />
        </View>
      )
    }
    else if (this.state.user) {
      return (
        <Provider store={ store }>
          <View style={ styles.container }>
            <AppNavigator screenProps={ { signOut: this.signOut } } />
          </View>
        </Provider>
      );
    } else {
      return (
        <SignInView ref={ this.signInView } login={ this.login } />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'

  }
})
