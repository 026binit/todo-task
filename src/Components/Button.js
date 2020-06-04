/* eslint-disable prettier/prettier */
import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

export default class Button extends React.Component{
    render(){
        const { title,btnStyle,btnTextStyle,btnBgColor,onPress } = this.props;
        return(
            <TouchableOpacity 
             onPress={() => onPress()}
             style={[btnStyle,{backgroundColor:btnBgColor}]}>
               <Text style={btnTextStyle}>{title}</Text>
            </TouchableOpacity>
        )
    }
}