/* eslint-disable prettier/prettier */
export const ON_NAME_CHANGE = 'ON_NAME_CHANGE';
export const ON_COUNTRY_CHANGE = 'ON_COUNTRY_CHANGE';
export const ON_FAV_MOB_BRAND_CHANGE = 'ON_FAV_MOB_BRAND_CHANGE';
export const ON_PHONE_NUMBER_CHANGE = 'ON_PHONE_NUMBER_CHANGE';

export const onNameChange = payload => {
   return {
     type:ON_NAME_CHANGE,
     payload
   }
}

export const onCountryChange = payload => {
    return {
        type:ON_COUNTRY_CHANGE,
        payload
    }
}

export const onFavMobBrandChange = payload => {
    return {
        type:ON_FAV_MOB_BRAND_CHANGE,
        payload
    }
}

export const onPhoneNumberChange = payload => {
    return{
        type:ON_PHONE_NUMBER_CHANGE,
        payload
    }
}