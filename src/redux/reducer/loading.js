/* eslint-disable prettier/prettier */

import { LOADING } from '../actionCreators/loadingAction';

const initialState = {
   loading:true
}

export const loadingReducer = (state=initialState,action) => {
    switch(action.type){
        case LOADING:
            return {
                loading:action.payload
            }  
        break;
        default:
            return state;        
    }
}