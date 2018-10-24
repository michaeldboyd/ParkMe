import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class OtherPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is a pushed page!</Text>
        <Text>Use Above Arrow or </Text>
        <Button title="This Button to Go Back" onPress={() =>
            this.props.navigation.navigate('Home')
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
