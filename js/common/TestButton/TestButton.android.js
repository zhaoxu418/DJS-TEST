import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

export default class TestButton extends Component {
    render() {
        return (
            <View style = {{height:60, width:100, backgroundColor:'red'}}>
                <Text>
                    android button
                </Text>
            </View>
        );
    }
}
