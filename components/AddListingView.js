import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import { Button } from 'react-native-elements'

export default class AddListingView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {address: '', city: '', state: '', zip: '', details: '', photo: ''};
    this.test = this.test.bind(this);
  }

  test(){
    console.log(this.state)
  }

  render() {

    const {address, city, state, zip, details, photo} = this.state;
    
    return (
      <View style={styles.container}>

        <FormLabel>Address</FormLabel>
        <FormInput 
          onChangeText={(address) => this.setState({address})}
          value={address}
          autoFocus={true}
          onSubmitEditing={() => { this.cityInput.focus(); }}/>
        {/* <FormValidationMessage>You must provide a valid address</FormValidationMessage> */}

        <FormLabel>City</FormLabel>
        <FormInput 
          ref={(input) => { this.cityInput = input; }}
          onChangeText={(city) => this.setState({city})}
          value={city}
          onSubmitEditing={() => { this.stateInput.focus(); }}/>
        {/* <FormValidationMessage>You must provide a valid city</FormValidationMessage> */}

        <FormLabel>State</FormLabel>
        <FormInput 
          ref={(input) => { this.stateInput = input; }}
          onChangeText={(state) => this.setState({state})}
          value={state}
          onSubmitEditing={() => { this.zipInput.focus(); }}/>
        {/* <FormValidationMessage>You must provide a valid state</FormValidationMessage> */}

        <FormLabel>Zip</FormLabel>
        <FormInput 
          ref={(input) => { this.zipInput = input; }}
          onChangeText={(zip) => this.setState({zip})}
          value={zip}
          onSubmitEditing={() => { this.detailsInput.focus(); }}/>
        {/* <FormValidationMessage>You must provide a valid zip code</FormValidationMessage> */}

        <FormLabel>Details</FormLabel>
        <FormInput 
          ref={(input) => { this.detailsInput = input; }}
          onChangeText={(details) => this.setState({details})}
          value={details}/>
        {/* <FormValidationMessage></FormValidationMessage> */}

        <FormLabel>Photo</FormLabel>
        <FormInput onChangeText={(photo) => this.setState({photo})}
        value={photo}/>


        <Button
          onPress={this.test}
          disabled={!address || !city || !state || !zip || !details}
          title='Submit' />
      </View>
    );
  }
}

const ListingData = 
{
  photo: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  details: ''
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25
  },
});


