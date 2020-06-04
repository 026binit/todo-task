/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';

export default class Divider extends React.Component{
    render(){
        const { top,buttom } = this.props;
        return(
            // eslint-disable-next-line no-trailing-spaces
            <View style={{ 
                marginTop:top ? top : 0,
                marginBottom: buttom ? buttom : 10
             }}/>
        )
    }
}