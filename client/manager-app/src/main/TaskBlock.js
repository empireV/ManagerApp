import React, {Component} from 'react';
import './TaskBlock.scss';

export class TaskBlock extends Component {
    render() {
        return (
            <div>
                <div className="card border-primary bg-light mb-3">
                    <div className="card-header d-flex justify-content-between align-content-center text-center">
                        <div>Title</div>
                        <button type="button" className="btn btn-outline-primary ">Add</button>
                    </div>
                    <div className="card-body">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sit temporibus totam? A aliquid animi culpa cupiditate debitis delectus ea eos fugit hic minus nam nesciunt nisi, odit quod sunt?</a>
                        </div>
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet asperiores culpa cumque delectus dolorem doloribus dolorum hic ipsam laboriosam, non, quam qui quod reprehenderit sint suscipit unde veniam voluptas!</a>
                        </div>
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, asperiores commodi cupiditate, debitis excepturi illum molestias, officiis optio pariatur praesentium qui voluptatum. Aliquam animi consequuntur natus quasi unde voluptate!</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
