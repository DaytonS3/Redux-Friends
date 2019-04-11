import React from 'react';
import {connect} from 'react-redux';
import {Friends} from './Action';
import {withRouter} from 'react-router-dom';
import '../App.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            login: {
                username: '',
                password: ''
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.Friends(this.state.login)
        .then(() => { this.props.history.push('/home');
         })
        this.setState({
            login: {
                username: '',
                password: ''
            }
        })
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            login: {
              ...this.state.login,
              [e.target.name]: e.target.value
            }
          });
    };
           
    

    render(){
        return(
            <div className="login">
                <div className="LoginHeader">
                    <h1 className="LoginHead">Sign In</h1>
                </div>
                <form onSubmit={this.handleSubmit} className='LoginForm'>
                    <input className="LoginInput" name="username" type="text"
                    placeholder="Username" value={this.state.login.username}
                    onChange={this.handleChange} 
                    />
                    <input className="LoginInput" name="password" type="text"
                    placeholder="Password" value={this.state.login.password}
                    onChange={this.handleChange}
                    />
                    <div>
                        <p className="LoginP">Forgot <span className="LoginSpan">Username / Password</span></p>
                    </div>
                    <button type='submit' className="LoginBtn">Login</button>
                </form>
                
                
            </div>
        
        )
    }
    
}


export default withRouter( connect(null, {Friends})(Login));