import { 
    GET_AGENTS,
    GET_AGENTS_ERROR,
    GET_AGENTS_SUCCESS,
    GET_CURRENT_AGENT,
    GET_CURRENT_AGENT_ERROR,
    GET_CURRENT_AGENT_SUCCESS,
    SET_CURRENT_AGENT_ID
} from '../../types';

const Reducer = (state, action ) => {
    switch(action.type){

        case GET_AGENTS: 
            return {
                ...state,
                agents: [],
                currentAgent: null,
                totalItems: null,
                loading: true
            }
        case GET_AGENTS_SUCCESS: 
            return {
                ...state,
                agents: action.payload.data,
                currentAgent: null,
                currentPage: action.payload.currentPage,
                totalItems: action.payload.total_items,
                loading: false
            }
        case GET_AGENTS_ERROR: 
            return {
                ...state,
                loading: false
            }
        case GET_CURRENT_AGENT: 
            return {
                ...state,
                currentAgent: null,
                loading: true
            }
        case GET_CURRENT_AGENT_SUCCESS: 
            return {
                ...state,
                currentAgent: action.payload.data,
                loading: false
            }
        case GET_CURRENT_AGENT_ERROR: 
            return {
                ...state,
                currentAgent: null,
                loading: false
            }
        case SET_CURRENT_AGENT_ID:
            return {
                ...state,
                currentAgent: null,
                currentAgentId: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default Reducer;