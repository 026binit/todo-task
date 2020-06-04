/* eslint-disable prettier/prettier */

import { ADD_ITEM,UPDATE_ITEM,DELETE_ITEM,NEW_DATA  } from '../actionCreators/listAction';

const initialState = {
    data:[],
    newData:[] // data for search filter
}


export const listReducer = (state=initialState,action) => {
    
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                data:action.payload
            };
         break;   
        case UPDATE_ITEM:  
            return {
                ...state,
                data:action.payload
            };
        break;    
        case DELETE_ITEM:    
            return {
                ...state,
                data:action.payload
            } 
        break;  
        case NEW_DATA:
            return{
                ...state,
                newData:action.payload
            }
        default:
            return state;                 
    }
}