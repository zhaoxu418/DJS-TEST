import React from 'react';
import {
  Text,
  View,
  Button,
  InteractionManager
} from 'react-native';

import TestButton from '../../common/TestButton/TestButton'

export default class TestPush extends React.Component {
  static navigationOptions = {
    title: '跳转结果',
    headerTitleStyle:{
      color:'black',
      fontSize:19,
      fontWeight:'normal'
    }
  };

  constructor(props) {
    super(props);
  
    this.state = {
      value:'0'
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      let aimParams = this.props.navigation.state.params;
      alert(aimParams.param1 + '---' + aimParams.param2)
    });
  }


  setValue() {
    store.save('value', '你好啊');
  }

  getValue() {
    store.get('value').then((value) => {
      alert(value);
    })
  }

  resetValue() {
    store.update('value', 'hello,kitty!');
  }

  updateValue() {
    this.setState({
      value:config.LISTVIEW_CELL_HEIGHT
    })
  }

  goBack() {
    this.props.navigation.state.params.callback('我回来啦');
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <Button onPress = {() => this.goBack()} title = '返回' />
        <Button onPress = {() => this.setValue()} title = '设置' />
        <Button onPress = {() => this.getValue()} title = '获取' />
        <Button onPress = {() => this.resetValue()} title = '重设' />

        <Button onPress = {() => this.updateValue()} title = '更新' />

        <TestButton />

        <Text style = {{marginLeft:50, marginTop:50}}>
          {this.state.value}
        </Text>
      </View>
      )
  }
}