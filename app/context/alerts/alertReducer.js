import { 
    GET_ALERTS,
    GET_ALERTS_SUCCESS,
    GET_ALERTS_ERROR,
    SET_CURRENT_ALERT
} from '../../types';

const Reducer = (state, action ) => {
    switch(action.type){

        case GET_ALERTS: 
            return {
                ...state,
                alerts: [],
                currentAlert: null,
                totalItems: null,
                loading: true
            }
        case GET_ALERTS_SUCCESS: 
            return {
                ...state,
                alerts: action.payload.data,
                currentAlert: null,
                currentPage: action.payload.currentPage,
                totalItems: action.payload.total_items,
                loading: false
            }
        case GET_ALERTS_ERROR: 
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default Reducer;