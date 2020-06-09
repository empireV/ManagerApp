import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './Wrap.scss';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forgot: false
        }
    }

    submit = () => {
        const name = document.getElementById('login').value
        const pass = document.getElementById('password').value
        axios.post('http://localhost:8081/users/login', { name:name, password:pass })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    forgot = () => {
        this.setState({
            forgot: !this.state.forgot
        })
    }
    render() {
        const { forgot } = this.state;
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
                    <Link to='/main/'><button type="button" className="btn btn-primary btn-block" onClick={this.submit}>Sign In</button></Link> {/* temporary*/}
                    {/*<button type="button" className="btn btn-primary btn-block" onClick={this.submit}>Sign In</button>*/}
                    <p className="forgot-password text-right">
                        <a href="#" onClick={this.forgot} >Forgot password?</a>
                    </p>
                    {
                        forgot && <div className='alert alert-danger text-center'>CONTACT ADMINISTRATOR +(380)123-45-67</div>
                    }
                    <p className="forgot-password text-right">
                        Not registered yet? - <Link to="/register"><b>Sign Up</b></Link>
                    </p>
                </form>
            </div>
        );
    }
}
