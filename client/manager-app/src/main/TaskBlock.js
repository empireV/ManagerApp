import React, {Component} from 'react';
import './TaskBlock.scss';
import Accordion from 'react-bootstrap/Accordion'
import {title} from "../const/const";
import Card from "react-bootstrap/Card";
import {Task} from "./Task";


export class TaskBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i: 0,
            task: `task`,
            body: `body`,
            children: []
        }
    }

    createTask = () => {
        this.setState({
            i: this.state.i + 1
        })
        const accordeon = document.getElementById('acc');
        this.state.children.push(<Task key={this.state.i} eventKey={this.state.i} task={this.state.task} body={this.state.body}/>)
        console.log(this.state.i);
        console.log(this.state.children);
    }
    render() {
        const {title} = this.props;

        return (
            <div>
                <div className="card border-primary bg-light mb-3">
                    <div className="card-header d-flex justify-content-between align-content-center text-center">
                        <div>{title}</div>
                        {title === 'Backlog' && <button type="button" className="btn btn-outline-primary" onClick={this.createTask}>Add</button>}
                    </div>
                    <div className="card-body">
                        <Accordion id='acc' defaultActiveKey="-1">
                            {
                                this.state.children.map(value => {
                                    return value
                                })
                            }

                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
}
