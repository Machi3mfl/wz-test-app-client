import React, { useReducer } from 'react';
import axiosClient from '../../config/axios';
import { useRouter } from 'next/router';
// Manejo de state
import AgentContenxt from './agentContext';
import AgentReducer from './agentReducer';

import { 
    GET_AGENTS,
    GET_AGENTS_ERROR,
    GET_AGENTS_SUCCESS,
    GET_CURRENT_AGENT,
    GET_CURRENT_AGENT_ERROR,
    GET_CURRENT_AGENT_SUCCESS,
    SET_CURRENT_AGENT_ID
} from '../../types';

const AgentState = props => {

    // initial state
    const initialState = {
       agents: [],
       currentAgent: null,
       currentAgentId: null,
       itemsPerPage: 10,
       currentPage: null,
       totalItems: null,
       loading: false
    }

    // create reducer
    const [state, dispatch] = useReducer(AgentReducer, initialState);

    // qty items per page in table
    const { itemsPerPage } = state;

    const router = useRouter();

    /**
     * get proyects from api
     */
    const getAgents = async (pageIndex) => {

        const currentPage = pageIndex || 1;

        try {
            // init get alerts action
            dispatch({
                type: GET_AGENTS
            });

            const res = await axiosClient.get(`/agents?limit=${itemsPerPage}&offset=${(currentPage - 1) * itemsPerPage}`);
    
            let payload = {
                ...res.data,
                currentPage: currentPage
            }
            // get alerts success
            dispatch({
                type: GET_AGENTS_SUCCESS,
                payload: payload
            });

        }catch (err){
            console.error(err);
            
            // get alerts error
            dispatch({
                type: GET_AGENTS_ERROR
            });
        }

    }


    /**
     * Go to agent detail page and set id for selected agent
     * @param {*} id 
     */
    const goToAgentDetail = id => {
        router.push(`/agents/${id}`);
        setCurrentAgentId(id);
    }

    /**
     * Save current id in state
     * @param {*} id 
     */
    const setCurrentAgentId = id => {
        dispatch({
            type: SET_CURRENT_AGENT_ID,
            payload: id
        });
    }

    /**
     * Get agent data from api
     * 
     * @param {*} id 
     */
    const getAgentById = async id => {


        try {
            // init get alerts action
            dispatch({
                type: GET_CURRENT_AGENT
            });

            const res = await axiosClient.get(`/agents/${id}`);
    
            let payload = {
                ...res.data
            }
            // get alerts success
            dispatch({
                type: GET_CURRENT_AGENT_SUCCESS,
                payload: payload
            });

        }catch (err){
            console.error(err);
            
            // get alerts error
            dispatch({
                type: GET_CURRENT_AGENT_ERROR
            });
        }
    }

    

    // provider
    return (
        <AgentContenxt.Provider
            value={{
                agents: state.agents,
                currentAgent: state.currentAgent,
                currentAgentId: state.currentAgentId,
                totalItems: state.totalItems,
                currentPage: state.currentPage,
                itemsPerPage: state.itemsPerPage,
                loading: state.loading,
                getAgents,
                goToAgentDetail,
                setCurrentAgentId,
                getAgentById
            }}
        >
            {props.children}
        </AgentContenxt.Provider>
    )
}

export default AgentState;