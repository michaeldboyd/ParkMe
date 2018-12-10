import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Image, Alert, ScrollView,  TouchableOpacity } from "react-native";
import { Card } from 'react-native-elements';
import FooterTabs from "./Footer";
import { Dimensions } from 'react-native'
// import PropTypes from 'prop-types'

export default class DetailsView extends Component {
  constructor() {
    super()
    this.state = {
      reserved: 0
    }

    this.reserveClicked = this.reserveClicked.bind(this);
    this.reserveConfirmed = this.reserveConfirmed.bind(this);

    this.unreserveClicked = this.unreserveClicked.bind(this);
    this.unreserveConfirmed = this.unreserveConfirmed.bind(this);

    this.actionCancelled = this.actionCancelled.bind(this);

  }

  componentDidMount() {
    this.setState({ reserved: this.props.navigation.state.params.listing.is_reserved })
  }

  componentDidUpdate(){
    //console.log('state',this.state)
  }

  reserveClicked() {
    Alert.alert(
      'Confirm Action',
      'Make Reservation?',
      [
        { text: 'Make Reservation', onPress: this.reserveConfirmed },
        { text: 'Cancel', onPress: this.actionCancelled, style: 'cancel' }
      ]
    );
  }

  reserveConfirmed() {
    let listing = this.props.navigation.state.params.listing;
    fetch('http://3.16.22.45:3000/api/listing/'+listing.id, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "is_reserved": 1
      })
    })
      .then((response) => {
        response.text()
      })
      .then((dataResponse) => {
        this.props.navigation.state.params.getListings();
        this.setState({ reserved: 1 })
      })
  }

  unreserveClicked() {
    Alert.alert(
      'Confirm Action',
      'Undo this reservation?',
      [
        { text: 'Undo Reservation', onPress: this.unreserveConfirmed },
        { text: 'Cancel', onPress: this.actionCancelled, style: 'cancel' }
      ]
    );
  }

  unreserveConfirmed() {
    let listing = this.props.navigation.state.params.listing;
    fetch('http://3.16.22.45:3000/api/listing/'+listing.id, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "is_reserved": 0
      })
    })
      .then((response) => response.text())
      .then((dataResponse) => {
        this.props.navigation.state.params.getListings();
        this.setState({ reserved: 0 })
      })
  }

  actionCancelled() {
    console.log('cancelled choice')
  }

  renderDescription = () => {
    let listing = this.props.navigation.state.params.listing;
    return (
      <View>
        <Text style={styles.descriptionText}>{listing.first_name + " " + listing.last_name}</Text>
        <Text sstyle={styles.descriptionText}>{listing.street_address}</Text>         
        <Text style={styles.descriptionText}>${listing.cost_per_hour} per hour</Text>
        {this.state.reserved === 1 ? (<Button onPress={this.unreserveClicked} title='Cancel Reservation' />) : (<Button onPress={this.reserveClicked} title='Reserve Listing' />)}
      </View>
    )
  }
  renderContactHeader = () => {
    let listing = this.props.navigation.state.params.listing;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.coverContainer}>
          <ImageBackground
            source={{
              uri: listing.parking_image_path === null ? 'https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png' : listing.parking_image_path
            }}
            style={styles.coverImage}
          >
          </ImageBackground>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.mainviewStyle}>
        <ScrollView style={styles.scroll}>
          <View style={[styles.container, this.props.containerStyle]}>
            <View style={styles.cardContainer}>
              {this.renderContactHeader()}
            </View>
          </View>
          <View style={styles.productRow}>{this.renderDescription()}</View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <FooterTabs active={4} getListings={this.props.navigation.state.params.getListings} navigation={this.props.navigation} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: "100%"
  },
  Text: {
    padding: "20%",
    margin: "20%"
  },
  Image: {
    padding: "20%",
    margin: "20%"
  },
  cardContainer: {
    flex: 1,
  },
  coverContainer: {
    position: 'relative',
  },
  coverImage: {
    height: Dimensions.get('window').width * (3 / 4),
    width: Dimensions.get('window').width,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  scroll: {
    backgroundColor: '#FFF',
    flex: 1,
    marginBottom: 55,
  },
  productRow: {
    margin: 25,
    justifyContent: 'center'
  },
  mainviewStyle: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
  },
  coverMetaContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  },
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F64A25',
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
  },
  buttonFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navigatorButton: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  navigatorText: {
    color: 'green',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 16,
  },
  borderCenter: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#FFA890',
  },
  textFooter: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 18,
  },
  priceText: {
    marginBottom: 5,
    letterSpacing: 1,

    color: 'black',
    fontSize: 36,
    fontWeight: '400',
  },
  detailText: {
    marginBottom: 10,
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  subDetailText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '100',
    lineHeight: 28,
    letterSpacing: 0.5,
  },
  descriptionText: {
    marginBottom: 4,
    color: 'gray',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
  },
});
