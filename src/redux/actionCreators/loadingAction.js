/* eslint-disable prettier/prettier */
export const LOADING = 'LOADING';

export const loading = payload => {
   return {
     type:LOADING,
     payload
   }
}

