import React, { useReducer } from 'react';
import axiosClient from '../../config/axios';

// Manejo de state
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

import { 
    GET_ALERTS,
    GET_ALERTS_SUCCESS,
    GET_ALERTS_ERROR
} from '../../types';

const AlertState = props => {

    // initial state
    const initialState = {
       alerts: [],
       currentAlert: null,
       itemsPerPage: 10,
       currentPage: null,
       totalItems: null,
       loading: false
    }

    // create reducer
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // items per page in table
    const { itemsPerPage } = state;

    /**
     * get alerts from api
     */
    const getAlerts = async (pageIndex) => {

        const currentPage = pageIndex || 1;

        try {
            // init get alerts action
            dispatch({
                type: GET_ALERTS
            });

            const res = await axiosClient.get(`/alerts?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);

    
            let payload = {
                ...res.data,
                currentPage: currentPage
            }
            // get alerts success
            dispatch({
                type: GET_ALERTS_SUCCESS,
                payload: payload
            });

        }catch (err){
            console.error(err);
            
            // get alerts error
            dispatch({
                type: GET_ALERTS_ERROR
            });
        }

    }

    // provider
    return (
        <AlertContext.Provider
            value={{
                alerts: state.alerts,
                currentAlert: state.currentalert,
                totalItems: state.totalItems,
                currentPage: state.currentPage,
                itemsPerPage: state.itemsPerPage,
                loading: state.loading,
                getAlerts
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;