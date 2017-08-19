import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';

export default  class PromistTest extends Component {
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

    getMessage(value) {
        var promise = new Promise((resolve, reject) => {
            if (value) {
                resolve('成功');
            } else {
                // resolve('失败');
                throw new Error('失败');
            }
        })

        return promise;
    }

    thirdPromise(value) {
        var promise = new Promise((resolve, reject) => {
            if (value === '成功') {
                resolve('第二个---成功');
            } else {
                reject('第二个失败');
            }
        })
        return promise;
    }

    // doubleUp(value) {
    //     return value * 2;
    // }
    // increment(value) {
    //     return value + 1;
    // }
    // output(value) {
    //     console.log(value);// => (1 + 1) * 2;
    // }
    // var promise = Promise.resolve(1);
    // promise.then(increment)
    // .then(doubleUp)
    // .then(output)
    // .catch(function(error){
    //     // promise chain中出现异常的时候会被调用 console.error(error);
    // });

    // (1)Promise.resolve(1);传递 1 给 increment函数；
    // (1)函数 increment对接收的参数进行 +1 操作并返回（通过return）；
    // (3)这时参数变为2，并再次传给 doubleUp；
    // (4)最后在函数 output中打印结果；

    // 如果想then或者catch方法后不再有链式方法可以在最后增加一个done()方法，这个方法不会再返回Promise对象，也就无法再增加执行then或者catch方法了。

    testPromise() {
        this.getMessage(true).then((data) => {
            return data;//为了让下面的函数可以使用data这个值作为参数
        }).then((data) => {
            return this.thirdPromise(data);
        }).then((data) => {
            alert(data);
        }).catch((error) => {
            alert(error);
        })
        //下面这种方法不能处理异常，导致异常会被掩盖。所以正常应该使用上诉方法，catch就取缔了下面的第二个参数。这样error也可以从cache中返回。
        // this.getMessage(false).then((data) => {
        //     alert(data);
        // }, (error) => {
        //     alert(error);
        // })
    }

    render() {
        return (
            <View>
                <Button onPress = {() => this.testPromise()} title = 'test' />
            </View>
        )
    }
}