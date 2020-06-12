import React, {Component} from 'react';
import './TaskBlock.scss';
import Accordion from 'react-bootstrap/Accordion'
import {title} from "../const/const";
import Card from "react-bootstrap/Card";

export class TaskBlock extends Component {

    render() {
        const {title} = this.props;
        return (
            <div>
                <div className="card border-primary bg-light mb-3">
                    <div className="card-header d-flex justify-content-between align-content-center text-center">
                        <div>{title}</div>
                        <button type="button" className="btn btn-outline-primary ">Add</button>
                    </div>
                    <div className="card-body">
                        <Accordion defaultActiveKey="-1">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    task1
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>body1</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    task2
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>body2</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    task3
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>body3</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    task4
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>body4</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
}
