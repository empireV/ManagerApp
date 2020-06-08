import React, { Component } from "react";

export class Register extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Login</label>
                    <input type="text" className="form-control" placeholder="Enter login" />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                     Already registered? - <a href="#"><b>Sign in</b></a>
                </p>
            </form>
        );
    }
}