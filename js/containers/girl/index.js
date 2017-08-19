import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ImmutableTest from './ImmutableTest'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  testPop(back) {
    alert(back)
  }

  render() {
    return (
      <View>
        <Button onPress = {() => this.props.navigation.navigate('TestPush', {param1:'test-1', param2:'test-2', callback:this.testPop.bind(this)})} title = '跳转' />
        <Button onPress = {() => this.props.navigation.navigate('ImmutableTest')} title = 'Immutable' />
        <Button onPress = {() => this.props.navigation.navigate('Flux')} title = 'Flux' />
        <Button onPress = {() => this.props.navigation.navigate('PromistTest')} title = 'Promise' />
      </View>
      )
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen }
    // ImmutableTest : { screen: ImmutableTest}
}, {
  headerMode:'screen',
  mode:'card'
});

export default SimpleApp
