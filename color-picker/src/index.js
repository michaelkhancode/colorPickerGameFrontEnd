import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import Siginin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom"


ReactDOM.render(<App />, document.getElementById('root'));