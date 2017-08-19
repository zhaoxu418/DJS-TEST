import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";
import Message from '../message'
import Girl from '../girl'
import Me from '../me'
import TestPush from './testPush'
import ImmutableTest from '../girl/ImmutableTest'
import Flux from '../girl/Flux'
import PromistTest from '../girl/PromistTest'

const MainScreenNavigator = TabNavigator(
  {
    Message: { 
      screen: Message,
      navigationOptions:{
        tabBarLabel:'消息',
        tabBarIcon:({focused,tintColor}) => (  
          <TabBarItem  
            tintColor={tintColor}  
            focused={focused}  
            normalImage={require('../../assets/tab/messageHome.png')}  
            selectedImage={require('../../assets/tab/messageHomeSelected.png')}  />  
        )
      },
    },
    Girl: { 
      screen: Girl,
      navigationOptions:{
        tabBarLabel:'美女',
        tabBarIcon:({focused,tintColor}) => (  
          <TabBarItem  
            tintColor={tintColor}  
            focused={focused}  
            normalImage={require('../../assets/tab/girlHome.png')}  
            selectedImage={require('../../assets/tab/girlHomeSelected.png')}  />  
        )
      }
    },
    Me: { 
      screen: Me,
      navigationOptions:{
        tabBarLabel:'我的',
        tabBarIcon:({focused,tintColor}) => (  
          <TabBarItem  
            tintColor={tintColor}  
            focused={focused}  
            normalImage={require('../../assets/tab/personHome.png')}  
            selectedImage={require('../../assets/tab/personHomeSelected.png')}  />  
        )
      }
    }
  },
  {
    tabBarPosition:'bottom',
    lazy:true,
    swipeEnabled:false,
    animationEnabled:false,
    tabBarOptions: {
      showIcon:true,
      activeTintColor: '#06c1ae',
      inactiveTintColor: '#979797',
      activeTintColor:'#333333',
      inactiveTintColor:'#999999',
      iconStyle:{marginTop:Platform.OS === 'ios' ? 0 : -2},//调节tab icon 的位置
      style: {
        backgroundColor: 'white',
        height:49
      },
      labelStyle: {
        fontSize: 10, // 文字大小  
        bottom:Platform.OS === 'ios' ? 3 : 5
      },
      indicatorStyle: {
        height:0
      }
    }
  }
);

class TabBarItem extends Component {  
  render() {  
    return(  
      <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }  
        style={ {width:22,height:22, marginTop: Platform.OS === 'ios' ? -3 : -2} }  />
    )  
  }  
}

const AppHome = StackNavigator(
  {
    MainScreenNavigator: { 
      screen: MainScreenNavigator,
      navigationOptions: {
        header:null
      }
    },
    TestPush: { screen: TestPush },
      ImmutableTest: { screen: ImmutableTest },
      Flux: { screen: Flux },
      PromistTest: { screen: PromistTest }
  },
  {
    headerMode: 'screen'
  }
);

export default AppHome
