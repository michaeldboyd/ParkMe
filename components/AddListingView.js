import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Alert, ActivityIndicator} from 'react-native';

import { AppRegistry, TextInput } from 'react-native';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import { Button } from 'react-native-elements';

import FooterTabs from "./Footer";
import { TabHeading } from 'native-base';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { street_address: '', city: '', state: '', zip: '', description: '', cost_per_hour: '', submitting: false };
    this.submit = this.submit.bind(this);
    this.submitAlert = this.submitAlert.bind(this);
  }

  submitAlert() {
    Alert.alert(
      'Confirm Action',
      'Submit Listings?',
      [
        { text: 'Submit', onPress: this.submit },
        { text: 'Cancel', onPress: this.actionCancelled, style: 'cancel' }
      ]
    );
  }

  actionCancelled() {
    console.log('cancelled choice')
  }

  submit() {
    this.setState({submitting: true})
    let cost = this.state.cost_per_hour;
    let des = this.state.description;
    let sa = this.state.street_address;
    let ct = this.state.city;
    let st = this.state.state;
    let zp = this.state.zip;
    let owner = 100;
    let im_path = "https://s3.us-east-2.amazonaws.com/park-me/parking_spots/fake-images/how-to-fill-driveway-cracks.35.jpg";
    fetch('http://3.16.22.45:3000/api/listing', {
      method: 'POST',
      headers: {
        //Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        owner_id: owner,
        cost_per_hour: cost,
        image_path: im_path,
        description: des,
        street_address: sa,
        city: ct,
        state: st,
        zip: zp
      }),
    }).then((response) => response.json()).then((responseJSON) => {
      this.props.navigation.state.params.getListings();
      this.setState({submitting: false})
      this.props.navigation.navigate("Home");
    })
  }

  render() {

    const { street_address, city, state, zip, description, cost_per_hour } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={this.state.submitting ? styles.submittingContainer : styles.hide}>
          <ActivityIndicator size="large" color="black" />
        </View>
        <ScrollView>
          <FormLabel>Address</FormLabel>
          <FormInput
            onChangeText={(street_address) => this.setState({ street_address })}
            value={street_address}
            autoFocus={true}
            onSubmitEditing={() => { this.cityInput.focus(); }} />
          {/* <FormValidationMessage>You must provide a valid address</FormValidationMessage> */}

          <FormLabel>City</FormLabel>
          <FormInput
            ref={(input) => { this.cityInput = input; }}
            onChangeText={(city) => this.setState({ city })}
            value={city}
            onSubmitEditing={() => { this.stateInput.focus(); }} />
          {/* <FormValidationMessage>You must provide a valid city</FormValidationMessage> */}

          <FormLabel>State</FormLabel>
          <FormInput
            ref={(input) => { this.stateInput = input; }}
            onChangeText={(state) => this.setState({ state })}
            value={state}
            onSubmitEditing={() => { this.zipInput.focus(); }} />
          {/* <FormValidationMessage>You must provide a valid state</FormValidationMessage> */}

          <FormLabel>Zip</FormLabel>
          <FormInput
            ref={(input) => { this.zipInput = input; }}
            onChangeText={(zip) => this.setState({ zip })}
            value={zip}
            onSubmitEditing={() => { this.descriptionInput.focus(); }} />
          {/* <FormValidationMessage>You must provide a valid zip code</FormValidationMessage> */}

          <FormLabel>Description</FormLabel>
          <FormInput
            ref={(input) => { this.descriptionInput = input; }}
            onChangeText={(description) => this.setState({ description })}
            value={description}
            onSubmitEditing={() => { this.costPerHourInput.focus(); }} />
          {/* <FormValidationMessage></FormValidationMessage> */}

          <FormLabel>Cost Per Hour</FormLabel>
          <FormInput
            ref={(input) => { this.costPerHourInput = input; }}
            onChangeText={(cost_per_hour) => this.setState({ cost_per_hour })}
            value={cost_per_hour} />

          <Button
            onPress={this.submitAlert}
            disabled={!street_address || !city || !state || !zip || !description || !cost_per_hour}
            title='Submit' />
        </ScrollView>
        <View style={{ height: 40 }} />
        <FooterTabs active={2} getListings={this.props.navigation.state.params.getListings} navigation={this.props.navigation} />
      </KeyboardAvoidingView>
    );
  }
}

const ListingData =
{
  cost_per_hour: '',
  street_address: '',
  city: '',
  state: '',
  zip: '',
  description: ''
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
  },
  submittingContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%'
  },
  hide: {
    display: 'none'
  }
});
