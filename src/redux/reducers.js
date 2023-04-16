import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from "./actionTypes"


const initialState = {
    loading : false,
    users : [],
    errors : ""
}

export const reducers = (state=initialState,actions) => {
    switch(actions.type){
        case FETCH_USERS_REQUEST : {
            return {
                ...state,
                loading : true
            }
        }
        case FETCH_USERS_SUCCESS : {
            return {
                ...state,
                loading : false,
                users : actions.payload,
                errors : ""
            }
        }
        case FETCH_USERS_FAILURE : {
            return {
                ...state,
                loading : false,
                users : [],
                errors : actions.payload
            }
        }
        default : return state
    }
}