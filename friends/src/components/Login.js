import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Login() {
    return(
        <div className="login">
            <div className="LoginHeader">
                <h1 className="LoginHead">Sign In</h1>
            </div>
            <form className='LoginForm'>
                <input className="LoginInput" type="text"
                placeholder="UserName" />
                <input className="LoginInput" type="passWord"
                placeholder="Password"/>
            </form>
            <Link to="/home"><button className="LoginBtn">Login</button></Link>
        </div>
        
    )
    
}


export default Login;