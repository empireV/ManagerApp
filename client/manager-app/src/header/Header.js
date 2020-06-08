import React, {Component} from "react";
import axios from 'axios';
import './Header.scss';

const CN = 'app-header'
export class Header extends Component {
    constructor(props) {
        super(props);

    }
    logout = () => {
        console.log('logout');
        axios.post(' ',{ })
            .then()
    }
    render() {
        return (
            <div className={`${CN} bg-primary`}>
                <div className={`${CN}-user`}>
                    name
                </div>
                <button type='button' className={`${CN}-logout btn btn-secondary`} onClick={this.logout}>Log Out</button>
            </div>
        )
    }

}