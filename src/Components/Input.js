/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput} from 'react-native';

export default class Input extends React.Component{
    render(){
        const { placeholder,style,onChangeText,value,keyboardType } = this.props;
        return(
           <TextInput 
              style={style}
              placeholder={placeholder}
              value={value}
              keyboardType={keyboardType ? keyboardType : 'default'}
              onChangeText={text => onChangeText(text) }
           /> 
        )
    }
}
