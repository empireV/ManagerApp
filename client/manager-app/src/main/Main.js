import React, {Component} from 'react';
import { TaskBlock } from "./TaskBlock";
import {title} from "../const/const";
import './Main.scss';
import {Redirect} from "react-router-dom";


export class Main extends Component {
    // loaddata()
    render() {
        return (
            <div className='container-fluid'>
                {
                    title.map(value => {
                        return (<TaskBlock key={value.title} title={value.title}/>)
                    })
                }
            </div>
        );
    }
}
