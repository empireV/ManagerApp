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

function App() {
  return (
    <div className="App">
      {/*<Header/>*/}
      {/*<Login/>*/}
      <Register/>
    </div>
  );
}

export default App;
