import React, { Component } from "react";
import './Wrap.scss'

export class Login extends Component {
    render() {
        return (
            <div className='wrapper'>
                <form>
                    <h3>Login</h3>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" className="form-control" placeholder="Enter login" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <div className="custom-control custom-checkbox">*/}
                    {/*        <input type="checkbox" className="custom-control-input" id="remember" />*/}
                    {/*        <label className="custom-control-label">Remember me</label>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <button type="button" className="btn btn-primary btn-block">Sign In</button>
                    <p className="forgot-password text-right">
                        <a href="#">Forgot password?</a>
                    </p>
                </form>
            </div>
        );
    }
}
