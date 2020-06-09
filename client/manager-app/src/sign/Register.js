import React, { Component } from "react";
import axios from 'axios';
import './Wrap.scss';
import {Link} from "react-router-dom";

export class Register extends Component {
    constructor(props) {
        super(props);

    }
    submit = () => {
        const name = document.getElementById('login').value
        const pass = document.getElementById('password').value
        axios.post('http://localhost:8081/users/signup', { name:name, password:pass})
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
                    <h3>Register</h3>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" id='login' className="form-control" placeholder="Enter login" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" id='password' className="form-control" placeholder="Enter password" />
                    </div>
                    <button type="button" className="btn btn-primary btn-block" onClick={this.submit}>Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered? - <Link to="/login"><b>Sign In</b></Link>
                    </p>
                </form>
            </div>
        );
    }
}