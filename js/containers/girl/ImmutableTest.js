import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';
let Immutable = require('immutable')

//deep clone 和immutable.js 能起到同样的效果。但是有下面的问题

//如果不使用deep clone等姿势的话原数据会被“篡改”，但是deep clone是个性能瓶颈

//Why? 全量循环，是个性能有缺陷的解决方案，结构一复杂就让你递归爆炸！爆炸！

//使用Immutable会解决这些问题！

// Immutable的优点
// 1. 每次对Immutable对象的操作返回的都是一个新对象，不会出现“篡改行为”
// 2. clone行为自下而上，共同部分会被保留，自己以上的节点才会被操作，性能更好(不是所有的节点都被重新修改，指修改需要被改变的那个节点的对应的链)
// 3. api丰富
// 4. 延迟操作等高端姿势
// 为什么性能快，因为用了hash maps tries和vector tries

export default  class ImmutableTest extends React.Component {
    static navigationOptions = {
        title: 'Immutable.test.js',
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

    //状态变化时会被调用
    shouldComponentUpdate(nextProps, nextState) {
        //利用Immutable解决React-Native那些因为对象被篡改导致的多次render问题

        //Immutable.is()  放这边结合起来判断前后state是否相同，用此方法，深度比较。
        //如果不深度比较，而是仅仅用 === 来做比较，即使是复制一下变量都会被认为是新的state，都会执行render()。
        //可以优化性能
        //继承PureComponent优化了shouldComponentUpdate这个方法
        //我们知道，当组件的props或者state发生变化的时候：React会对组件当前的Props和State分别与nextProps和nextState进行比较，
        //当发现变化时，就会对当前组件以及子组件进行重新渲染，否则就不渲染。有时候为了避免组件进行不必要的重新渲染，
        //我们通过定义shouldComponentUpdate来优化性能。例如如下代码：
        //shouldComponentUpdate通过判断props.color和state.count是否发生变化来决定需不需要重新渲染组件，当然有时候这种简单的判断，
        //显得有些多余和样板化，于是React就提供了PureComponent来自动帮我们做这件事，这样就不需要手动来写shouldComponentUpdate了：
        //大多数情况下， 我们使用PureComponent能够简化我们的代码，并且提高性能，但是PureComponent的自动为我们添加的shouldComponentUpate函数，
        //只是对props和state进行浅比较(shadow comparison)，当props或者state本身是嵌套对象或数组等时，浅比较并不能得到预期的结果，
        //这会导致实际的props和state发生了变化，但组件却没有更新的问题
        //深比较:用Immutable.js进行深比较，避免上面所说的，嵌套对象中改变数值，但是浅比较比较不出来，认为是相同的，所以不进行更新
        //浅比较:PureComponent 中对shouldComponentUpdate 进行了封装，但是只处理了浅比较。会导致上面的问题

        //Immutable.js进行深比较和普通浅比较有两种情况：
        //1。完全复制了一个变量，浅比较认为是不一样的就会执行render().而深比较认为是一样的
        //2。一个嵌套的对象做了改变，浅比较认为是一样的没有进行render().而深比较则可以检测出是不一样的

        //pureComponent vs Component 通过上面对PureComponent和Component的介绍，你应该已经了解了二者的区别:PureComponent已经定义好了shouldUpdateComponent而Component需要显示定义。
    }

    ImmutableTest1() {
        const map1 = Immutable.Map({a: 1, b: 2, c: 3});
        const map2 = map1.set('b', 50);
        const map3 = {a: 1, b: 2, c: 3};
        const map4 = map3;
        map4.b = 4;

        console.log('---> map1.get ' + map1.get('b'));
        console.log('---> map2.get ' + map2.get('b'));
        console.log('---> map3.get ' + map3.b);
        console.log('---> map4.get ' + map3.b);
        // console.log('---> isImmutable([]) ' + isImmutable([]));
        // console.log('---> isImmutable({}) ' + isImmutable({}));
        // console.log('---> isImmutable(Map()) ' + isImmutable(Map()));
        // console.log('---> isImmutable(List()) ' + isImmutable(List()));
    }

    ImmutableFromJS() {
        //fromJS()   将JS对象和数组转换为不可变Map和List
        const map = {a: 1, b: 2, c: 3};
        let map1 = Immutable.fromJS(map);
        let map2 = map1.set('a', 4);

        console.log('---> map1 ' + map1.get('a'));
        console.log('---> map2 ' + map2.get('a'));
    }

    ImmutableIs() {
        //is()   比较两个对象是否相等
        const map = {a: 1, b: 2, c: 3};
        let map1 = Immutable.fromJS(map);
        let map2 = Immutable.fromJS(map);

        console.log('---> map1 == map2 ' + (map1 === map2));//false,浅比较没有深度比较两个数据。所以不同对象，不考虑值是否一样，都被认为是不一样的
        console.log('---> map1 == map2 ' + Immutable.is(map1, map2));//true,深度比较，发现完全相同，只不过是存放在了不同的位置

        //因为每次返回的是不同对象，就算值完全相等，也不相等
    }

    render() {
        return (
            <View>
                <Button onPress = {() => this.ImmutableTest1()} title = '初试' />
                <Button onPress = {() => this.ImmutableFromJS()} title = 'fromJS()' />
                <Button onPress = {() => this.ImmutableIs()} title = 'is()' />
            </View>
        )
    }
}

{/*<Button onPress = {() => this.props.navigation.navigate('TestPush', {param1:'test-1', param2:'test-2', callback:this.testPop.bind(this)})} title = '跳转' />*/}