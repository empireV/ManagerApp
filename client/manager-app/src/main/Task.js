import React, {Component} from 'react';
import './TaskBlock.scss';
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";

export class Task extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { task, body, eventKey} = this.props
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                    {task}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={eventKey}>
                    <Card.Body>{body}</Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}
