import React, { Component } from "react";
import axios from 'axios';
import './Wrap.scss';

export class Login extends Component {
    constructor(props) {
        super(props);
   
    }
    submit = () => {
        const name = document.getElementById('login').value
        const pass = document.getElementById('password').value
        axios.post('http://localhost:8081/users/signin', { name:name, password:pass})
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className='wrapper'>
                <form>
                    <h3>Login</h3>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" id='login' className="form-control" placeholder="Enter login" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" id='password' className="form-control" placeholder="Enter password" />
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <div className="custom-control custom-checkbox">*/}
                    {/*        <input type="checkbox" className="custom-control-input" id="remember" />*/}
                    {/*        <label className="custom-control-label">Remember me</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <button type="button" className="btn btn-primary btn-block" onClick={this.submit}>Sign In</button>
                    <p className="forgot-password text-right">
                        <a href="#">Forgot password?</a>
                    </p>
                </form>
            </div>
        );
    }
}
