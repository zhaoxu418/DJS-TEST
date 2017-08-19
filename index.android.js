/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SetUp from './js/containers/setup'
import './storageStart'

export default class sweet extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}

AppRegistry.registerComponent('sweet', () => SetUp);
