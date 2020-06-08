import React, { Component } from "react";

export class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>
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
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <a href="#">Forgot password?</a>
                </p>
            </form>
        );
    }
}
