import { 
    GET_RULES,
    GET_RULES_SUCCESS,
    GET_RULES_ERROR,
    SET_CURRENT_RULE_ID,
    GET_CURRENT_RULE,
    GET_CURRENT_RULE_SUCCESS,
    GET_CURRENT_RULE_ERROR
} from '../../types';

const Reducer = (state, action ) => {
    switch(action.type){

        case GET_RULES: 
            return {
                ...state,
                rules: [],
                currentRule: null,
                totalItems: null,
                loading: true
            }
        case GET_RULES_SUCCESS: 
            return {
                ...state,
                rules: action.payload.data,
                currentRule: null,
                currentPage: action.payload.currentPage,
                totalItems: action.payload.total_items,
                loading: false
            }
        case GET_RULES_ERROR: 
            return {
                ...state,
                loading: false
            }
        case GET_CURRENT_RULE: 
            return {
                ...state,
                currentRule: null,
                loading: true
            }
        case GET_CURRENT_RULE_SUCCESS: 
            return {
                ...state,
                currentRule: action.payload.data,
                loading: false
            }
        case GET_CURRENT_RULE_ERROR: 
            return {
                ...state,
                currentRule: null,
                loading: false
            }
        case SET_CURRENT_RULE_ID:
            return {
                ...state,
                currentRule: null,
                currentRuleId: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default Reducer;