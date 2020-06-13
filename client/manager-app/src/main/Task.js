import React, {Component} from 'react';
import './TaskBlock.scss';
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";
import './TaskBlock.scss'

export class Task extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { task, body, eventKey} = this.props
        return (
            <Card>
                <Accordion.Toggle className='font-weight-bold' as={Card.Header} eventKey={eventKey}>
                    {task}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={eventKey}>
                    <Card.Body classname='desc'>{body}</Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}
