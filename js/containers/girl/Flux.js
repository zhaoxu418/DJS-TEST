import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';

export default  class Flux extends Component {
    static navigationOptions = {
        title: 'Flux.test.js',
        headerTitleStyle:{
            color:'black',
            fontSize:19,
            fontWeight:'normal'
        }
    };
    constructor(props) {
        super(props);

        this.state = {};
    }

    StaticFlux() {
        //Flux框架的四大组成部分
        //View： 视图层
            //View很简单，我们定义了一个按钮，绑定了createNewItem方法，这个方法向Dispatcher发出一个名为addNewItem的Action。
        //Action（动作）：视图层发出的消息（比如mouseClick）
            //每个Action都是一个对象，都包含两部分：payload（数据）和 type（类型），type 是一个字符串常量，用来标识动作。
        //Dispatcher（派发器）：用来接收Actions、执行回调函数
            //Dispatcher 的作用是将 Action 派发到 Store、。你可以把它看作一个路由器，负责在 View 和 Store 之间，建立 Action 的正确传递路线。注意，Dispatcher 只能有一个，而且是全局的。
            //Dispatcher 只用来派发 Action，不应该有其他逻辑。
        //Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面
            //Store 保存整个应用的状态。它的角色有点像 MVC 架构之中的Model 。

            //ListStore继承了EventEmitter.prototype，因此就能使用ListStore.on()和ListStore.emit()，来监听和触发事件了。
            //Store 更新后（this.addNewItemHandler()）发出事件（this.emitChange()），表明状态已经改变。 View 监听到这个事件，就可以查询新的状态，更新页面了。

        // 总结：
            // 1、在一个简单的RN项目中，还是没有必要引入Flux框架，毕竟增加了项目的复杂度。
            // 2、flux框架符合MVC模式，他的数据流转实际上使用消息机制来实现，譬如：EventEmitter里的emit 和on (通知？)
    }

    render() {
        return (
            <View>
                <Button onPress = {() => this.StaticFlux()} title = 'test' />
            </View>
        )
    }
}