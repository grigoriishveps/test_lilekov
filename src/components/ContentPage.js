import React, {useEffect} from "react";
import  {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {get_user} from "../store/action";
import {Redirect} from "react-router-dom";

const ContentPage = (props)=>{
    const user = props.user;
    useEffect(()=>{
        props.get_user();
    },[])

    if (!props.app_ready)
        return (<Redirect to='/login' />);
    return ( <>
        {user && <div className="contentWrapper">
            <img src={user.picture.large} />
            <h4>{`${user.name.first}  ${user.name.last}`}</h4>
        </div>
        }
    </>)
}


function mapStateToProps(state){
    return {
        user: state.user,
        app_ready: state.app_ready
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        get_user
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ContentPage)
