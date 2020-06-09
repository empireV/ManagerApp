import React, {Component} from 'react';
import './TaskBlock.scss';
import {title} from "../const/const";

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

                        <div className="accordion" id="accordionExample">

                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left" type="button"
                                                data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            label1
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                       t1
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                            label2
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        t2
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            label3
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                     data-parent="#accordionExample">
                                    <div className="card-body">
                                        t3
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
