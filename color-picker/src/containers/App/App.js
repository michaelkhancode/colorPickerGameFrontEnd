import React from 'react';
import MainGame from '../MainGame/MainGame';
import Signin from '../../components/Signin/Signin';
import Register from '../../components/Register/Register';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
  return(
    <Router>
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
              render={(props) => <MainGame props={props} /> }
          />
      </Switch>
    </Router >
  )
}


export default App;