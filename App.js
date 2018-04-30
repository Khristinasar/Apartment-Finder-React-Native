'use strict'; // enables Strict Mode, which makes JS better
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

class SearchPage extends Component<{}> {
  render() {
    return <Text style={styles.description}>Search for houses to buy! (Again)</Text>;
  }
}

type Props = {};
export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
};

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
    container: {
    flex: 1,
  },
});
