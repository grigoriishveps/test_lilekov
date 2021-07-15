import axios from "axios";

export const LOGIN_USER ="LOGIN_USER";
export const GET_USER ="GET_USER";

export const login =() =>{
    return (dispatch)=>{
        dispatch({
            type: LOGIN_USER
        })
    }
}
export const get_user =() =>{
    return (dispatch)=>{
        const inc = "name,login,registered,id,email,picture"
        axios.get('https://randomuser.me/api/', {params:{results:1, inc, nat: 'us'}}).then(response=>{
            dispatch({
                type: GET_USER,
                user: response.data.results[0]
            })
        })
    }
}

