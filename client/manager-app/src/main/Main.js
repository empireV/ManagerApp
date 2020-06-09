import React, {Component} from 'react';
import { TaskBlock } from "./TaskBlock";
import './Main.scss';


export class Main extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <TaskBlock/>
                <TaskBlock/>
                <TaskBlock/>
                <TaskBlock/>
            </div>
        );
    }
}
