import React, { useReducer } from 'react';
import { useRouter } from 'next/router';
import axiosClient from '../../config/axios';

// Manejo de state
import AlertContext from './ruleContext';
import AlertReducer from './ruleReducer';

import { 
    GET_RULES,
    GET_RULES_SUCCESS,
    GET_RULES_ERROR,
    GET_CURRENT_RULE,
    GET_CURRENT_RULE_ERROR,
    GET_CURRENT_RULE_SUCCESS,
    SET_CURRENT_RULE_ID
} from '../../types';

const RuleState = props => {

    // initial state
    const initialState = {
       rules: [],
       currentRule: null,
       currentRuleId: null,
       itemsPerPage: 10,
       currentPage: null,
       totalItems: null,
       loading: false
    }

    // create reducer
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // items per page in table
    const { itemsPerPage } = state;

    const router = useRouter();
   
    /**
     * Get Rules from api, can be filtered by page
     * @param {*} pageIndex optional
     */
    const getRules = async (pageIndex) => {

        const currentPage = pageIndex || 1;

        try {
            // init get alerts action
            dispatch({
                type: GET_RULES
            });

            const res = await axiosClient.get(`/rules?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);

    
            let payload = {
                ...res.data,
                currentPage: currentPage
            }
            // get alerts success
            dispatch({
                type: GET_RULES_SUCCESS,
                payload: payload
            });

        }catch (err){
            console.error(err);
            
            // get alerts error
            dispatch({
                type: GET_RULES_ERROR
            });
        }

    }

    /**
     * 
     * Redirect to rule detail and set id in state
     * @param {*} id 
     */
    const goToRuleDetail = id => {
        router.push(`/rules/${id}`);
        setCurrentRuleId(id);
    }

    /**
     * Set selected rule id in state
     * 
     * @param {*} id 
     */
    const setCurrentRuleId = id => {
        dispatch({
            type: SET_CURRENT_RULE_ID,
            payload: id
        });
    }

    /**
     * 
     * get rule by id from api
     * 
     * @param {*} id 
     */
    const getRuleById = async id => {


        try {
            // init get alerts action
            dispatch({
                type: GET_CURRENT_RULE
            });

            const res = await axiosClient.get(`/rules/${id}`);
    
            let payload = {
                ...res.data
            }
            // get alerts success
            dispatch({
                type: GET_CURRENT_RULE_SUCCESS,
                payload: payload
            });

        }catch (err){
            console.error(err);
            
            // get alerts error
            dispatch({
                type: GET_CURRENT_RULE_ERROR
            });
        }
    }

    

    // provider
    return (
        <AlertContext.Provider
            value={{
                rules: state.rules,
                loading: state.loading,
                currentRule: state.currentRule,
                currentRuleId: state.currentRuleId,
                totalItems: state.totalItems,
                currentPage: state.currentPage,
                itemsPerPage: state.itemsPerPage,
                getRules,
                goToRuleDetail,
                setCurrentRuleId,
                getRuleById
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default RuleState;