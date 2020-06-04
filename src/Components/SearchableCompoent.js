/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';

import Input from '../Components/Input';

export default class SearchableCompoent extends React.Component{ 
    render(){
        const { searchText,placeholder,inputStyles,handleSearchText } = this.props;
        return(
                <Input
                    placeholder={placeholder}
                    style={inputStyles}
                    value={searchText}
                    onChangeText={(value) => handleSearchText(value)}
                >
                </Input>
        )
    }
}
