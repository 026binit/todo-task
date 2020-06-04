
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const NEW_DATA = 'NEW_DATA';

import { addTodoFirebase,getTodosFirebase,updateTodoFirebase,deleteTodoFirebase } from '../../Api/TodoApi';
import { loading } from './loadingAction';

export const getFirebaseItems = data => {
    return dispatch => {
        let callback = items => {
            dispatch(addItem(items));
            dispatch(handleNewData(items))
            dispatch(loading(false))
        }
        getTodosFirebase(callback)
    }
    
}

export const addItem = data => {
    return{
        type:ADD_ITEM,
        payload : data
    }
}
export const updateItem = data => {
    
    return{
        type:UPDATE_ITEM,
        payload : data
    }
}
export const deleteItem = data => {
    return{
        type:DELETE_ITEM,
        payload : data
    }
}
export const handleAddItem = (data,item) => {
    return  dispatch => {
        let callback = () => {
             dispatch(getFirebaseItems())
        }
        addTodoFirebase(item,callback);
    }
}
export const handleUpdateItem = (data,item) => {
    return dispatch => {
        let callback = () => {
             dispatch(getFirebaseItems())
        }
        updateTodoFirebase(item,item.id,callback);
    }
}
export const handleDeleteItem = (data,id) => {
    
     return dispatch => {
         let callback = () => {
              dispatch(getFirebaseItems())
         }
         deleteTodoFirebase(id,callback)
     }
}
/* handle newData for search filter */
export const handleNewData = data => {
    return{
        type:NEW_DATA,
        payload:data
    }
}