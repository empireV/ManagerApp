import React from 'react';
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

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/login' exact>
                        <Login/>
                    </Route>
                    <Route path='/register' exact>
                        <Register/>
                    </Route>
                    <Route path='/main' exact>
                        <Header/>
                        <Main/>
                    </Route>

                    <Redirect from="/" to="/login" exact/>
                    <Redirect from="*" to="/"/>


                </Switch>
            </Router>
        </div>
    );
}

export default App;
