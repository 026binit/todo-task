/* eslint-disable prettier/prettier */

import { ON_NAME_CHANGE,ON_COUNTRY_CHANGE,ON_FAV_MOB_BRAND_CHANGE,ON_PHONE_NUMBER_CHANGE } from '../actionCreators/listItemAction';

const initialState = {
    name:'',
    country:'',
    favMobBrand:'',
    phoneNumber:''
}

export const listItemReducer = (state=initialState,action) => {
    switch(action.type){
        case ON_NAME_CHANGE:
            return {
                ...state,
                name:action.payload
            }
        break;
        case ON_COUNTRY_CHANGE:
            return {
                ...state,
                country:action.payload
            }
        break;
        case ON_FAV_MOB_BRAND_CHANGE:
            return {
                ...state,
                favMobBrand:action.payload
            }    
        break;
        case ON_PHONE_NUMBER_CHANGE:
            return {
                ...state,
                phoneNumber:action.payload
            }
        break;
        default:
            return state;        
    }
}