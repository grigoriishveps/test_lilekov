import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {useState} from "react";
import {bindActionCreators} from "redux";
import { login} from "../store/action";

const AuthComponent = (props)=>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [userErr, setUserErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [sendErr, setSendErr] = useState("");

    const handleClickLogin = ()=>{
        if(username ==="" || password===""  ) {
            setSendErr("Не все поля заполнены!");
            setUserErr((username.length < 1) ? "Должен быть заполнен" : "");
            setPassErr((password.length < 1) ? "Должен быть заполнен" : "");
        }
        else{
            props.login()
        }
    }

    if (props.app_ready)
        return (<Redirect to='/' />);
    return(
        <div className="authComponent">
            <span><b>username</b></span>
            <input type="text"
                   placeholder="Enter username..."
                   value={username}
                   onChange={(e)=>{setUsername(e.target.value);}}/>
            <label>{userErr}</label>
            <span><b>password </b></span>
            <input type="text"
                   placeholder="Enter password..."
                   value={password}
                   onChange={(e)=>{setPassword(e.target.value)}}/>
            <label>{passErr}</label>
            <button onClick={handleClickLogin}>Войти</button>
            <span className="infoSend">{sendErr}</span>
        </div>

    )
}

function mapStateToProps(state){
    return{
        app_ready: state.app_ready
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent)
