import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '我的',
    headerTitleStyle:{
      color:'black',
      fontSize:19,
      fontWeight:'normal'
    }
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class App extends Component {
  render() {
    return (
      <SimpleApp />
    );
  }
}
