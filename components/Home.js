import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect, Provider } from "react-redux";
import actions from "../actions/toggleActions";
import store from "../store/store";
import { MapView } from 'expo';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      listings : []
    }

  }

  componentDidMount() {
    this.getListings()
  }

  onPress = () => {
    this.props.setToggleStatus(!this.props.isToggled);
  };

  getListings() {
    fetch('http://3.16.22.45:3000/api/listings')
      .then((response) => response.json())
      .then((jsonResponse) => {
        var reversedArray = jsonResponse.listings.slice().reverse();
        var filteredArray = reversedArray.filter((listing) => listing.state === "FL")
        filteredArray.unshift(jsonResponse.listings[jsonResponse.listings.length-1])
        // this.setState({ listings: filteredArray, refreshing: false })
        this.getCoordinates(filteredArray)
      }).catch((err) => {
        console.log('err', err)
        this.setState({ refreshing: false})
      })
  }

  async getCoordinates(filteredArray) {
    await Promise.all(filteredArray.map(async function(listing) {
      response = await fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=7WIrkMXUaqKb28XTAN6AQ7WT7ijREbhU&location=${listing.street_address}`)
      json = await response.json();
      coords = json.results[0].locations[0].latLng
      console.log(coords)
      listing.coordinates = coords
      return listing;
    }));
    console.log(filteredArray)
    this.setState({ listings: filteredArray, refreshing: false })
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}>
        {this.state.listings.length > 0 && this.state.listings.map((listing,i) => (
            <MapView.Marker
              coordinate={listing.coordinates && {latitude: listing.coordinates.lat, longitude: listing.coordinates.lng}}
              title={listing.city + ', ' + listing.state}
              key={i}
              id={listing.id}
            />
        ))}
      </MapView>
    );
  }
}

const markers = [
{
  latitude: 40.244330,
  longitude: -111.656360,
  title: 'Foo Place',
  subtitle: '1234 Foo Drive'
}];

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
)(Home);
