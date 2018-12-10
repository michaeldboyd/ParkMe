import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { connect, Provider } from "react-redux";
import actions from "../actions/toggleActions";
import store from "../store/store";
import { MapView } from 'expo';
import FooterTabs from "./Footer";

class MapMarkerView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          onPress={() => navigation.navigate('ListView')}
          title="List View"
          color="#fff"
        />
      )
    };
  };
  constructor() {
    super()
    this.state = {
      listings : [],
      refreshing: true
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
        var filteredArray = reversedArray.filter((listing) => true)
        filteredArray.unshift(jsonResponse.listings[jsonResponse.listings.length-1])
        this.setState({ listings: filteredArray, refreshing: false })
      }).catch((err) => {
        console.log('err', err)
        this.setState({ refreshing: false})
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}>
          {this.state.listings.length > 0 && this.state.listings.map((listing,i) => (
              <MapView.Marker
                coordinate={{latitude: listing.latitude, longitude: listing.longitude}}
                title={listing.city + ', ' + listing.state}
                key={i}
                id={listing.id}
                pinColor={'#3D6DCC'}
                onCalloutPress={() => this.props.navigation.navigate('Details', { listing: listing})}
              />
          ))}
        </MapView>
        {this.state.refreshing && <ActivityIndicator style={styles.loading} size="large" color="#0000ff"/>}
        <FooterTabs active={1} getListings={this.getListings} navigation={this.props.navigation} screenProps={this.props.screenProps} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
)(MapMarkerView);
