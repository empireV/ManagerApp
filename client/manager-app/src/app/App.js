import React, {Component} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import {Header} from "../header/Header";
import {Login} from "../sign/Login";
import {Register} from "../sign/Register";
import {Main} from "../main/Main";



export default class App extends Component{
    state = {
        name: ''
    }
    updateData = (value) => {
        this.setState({ name: value })
        console.log(this.state);
    }
    render() {
            return (
                <div className="App">
                    <Router>
                        <Switch>
                            <Route path='/login' exact>
                                <Login updateData={this.updateData}/>
                            </Route>
                            <Route path='/register' exact>
                                <Register/>
                            </Route>
                            <Route path='/main' exact>
                                <Header name={this.state.name}/>
                                <Main/>
                            </Route>

                            <Redirect from="/" to="/login" exact/>
                            <Redirect from="*" to="/"/>


                        </Switch>
                    </Router>
                </div>
            );
        }
    }



