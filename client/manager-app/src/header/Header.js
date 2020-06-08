import React, {Component} from "react";

import './Header.scss';

const CN = 'app-header'
export class Header extends Component {
    constructor(props) {
        super(props);

    }
    logout = () => {
        console.log('logout');
    }
    render() {
        return (
            <div className={`${CN} fixed-top`}>
                <div className={`${CN}-user`}>
                    name
                </div>
                <button type='button' className={`${CN}-logout btn btn-primary`} onClick={this.logout}>Logout</button>
            </div>
        )
    }

}