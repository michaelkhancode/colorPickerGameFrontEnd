import React from 'react';
import MainGame from '../MainGame/MainGame';
import Signin from '../../components/Signin/Signin';
import Register from '../../components/Register/Register';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom"

const App = () => {
  return(
    <Router>
      {/* <NavLink>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
      </NavLink> */}
      <Switch>
          <Route 
              exact 
              path="/" 
              render={(props) => <Signin /> }
          />
          <Route 
              exact 
              path="/register" 
              render={(props) => <Register /> }
          />
          <Route 
              exact 
              path="/maingame" 
              render={(props) => <MainGame /> }
          />
      </Switch>
    </Router >
  )
}


export default App;