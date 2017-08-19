/**
 * zx
 * 全局变量
 * @flow
 */

import {
    Dimensions
} from 'react-native';

import store from 'react-native-simple-store';
let { width, height } = Dimensions.get('window');//拿到屏幕的宽度，和高度

global.store = store;

global.config = {
    SCREEN_WIDTH:width,//屏幕宽度
    SCREEN_HEIGHT:height,//屏幕高度

    LISTVIEW_CELL_HEIGHT:45,//ListView 行高度（特殊高度例外）

    TXTHEME_LINE_HEIGHT:0.5,

    TXTHEME_BACKGROUNDCOLOR:'#f5f5f5',//每个页面的根页面都要设置背景颜色
    TXTHEME_LINECOLOR:'#ededed',//页面中涉及到横线的都用此颜色

    TXTHEME_BLACK:'#141414',//项目-黑色
    TXTHEME_GRAY:'#888888',//二级-黑色(看设计图选择)
    TXTHEME_LIGHTGRAY:'#aaaaaa',//三级-黑色(看设计图选择)
    TXTHEME_TEXTFIELD_PLACEHODER:'#d8d8d8',//这个颜色用于TextField的placeholder的字体颜色，一般默认，不需要设置。（备用:其他情况也会用到）
    TXTHEME_ORANGE:'#ffcb31',//项目-橘色
    TXTHEME_RED:'#f35656',//项目-红色

    //navigator 使用。
    nav_bar_height_ios:44,
    nav_bar_height_android:50,
};