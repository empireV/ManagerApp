import React, {Component} from "react";
import './Header.scss';
import {Link, Redirect} from "react-router-dom";

const CN = 'app-header'
export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props
        return (
            <div className={`${CN} bg-primary d-flex`}>
                <div className={`${CN}-user alert alert-primary col-4`}>
                    User: {name}
                </div>
                <Link to='/login'><button type='button' className={`${CN}-logout btn btn-secondary`} onClick=''>Log Out</button></Link>
            </div>
        )
    }
}