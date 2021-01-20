import { useState } from 'react';
import dataApi from '../api/getApi';
import * as type from './../constants';

const initialState = {};
const dataSide = (state = initialState, action) => {
    switch (action.type) {
        case type.FILTER:
            console.log(dataApi)
            return {
                data: dataApi
            };
            case type.GET_DATA_FROM_API:
                return{
                    data: action.payload
                }
        default: return state;
    }
}
export default dataSide;
