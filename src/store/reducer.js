import {GET_USER, LOGIN_USER} from "./action";

const initialState = {
    user:null,
    app_ready: false
}

export default function (state=initialState, action){
    switch (action.type){
        case LOGIN_USER:
            return{
                ...state,
                app_ready: true
            }
        case GET_USER:
            return{
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}
