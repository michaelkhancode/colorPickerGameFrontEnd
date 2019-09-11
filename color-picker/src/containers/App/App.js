import React from 'react';
import MainGame from '../MainGame/MainGame';
import Signin from '../../components/Signin/Signin';
import Register from '../../components/Register/Register';
import Profile from '../../components/Profile/Profile';
import LeaderBoard from '../../components/LeaderBoard/LeaderBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      path: "/",
      user:{}
    }
  }

  validLogIn = (user) => {
    this.setState({ path:"/maingame", user:user, isLoggedIn:true })
  }

  newUser = (user) => {
    this.setState({ path:"/maingame", user:user, isLoggedIn:true })
  }

  changePath = (newPath) => {
    this.setState({ path:newPath })
  }

  render() {
    console.log(this.state)

    let componentToRender;

    if (this.state.isLoggedIn){
      switch (this.state.path) {
        case "/":
          this.setState({ isLoggedIn:false })
          componentToRender = <Signin changePath={this.changePath} validLogIn= {this.validLogIn} />;
          break;
        case "/maingame":
          componentToRender = <MainGame changePath={this.changePath} user={this.state.user} />;
          break;
        case "/profile":
            componentToRender = <Profile changePath={this.changePath} user={this.state.user} />;
            break;
        case "/leaderboard":
            componentToRender = <LeaderBoard changePath={this.changePath} user={this.state.user} />;
            break;
      
        default:
          break;
      }
    } else {
      switch (this.state.path) {
        case "/":
          componentToRender = <Signin changePath={this.changePath} validLogIn= {this.validLogIn} />;
          break;
        case "/register":
          componentToRender = <Register newUser={this.newUser} changePath={this.changePath} validLogIn= {this.validLogIn} />;
          break;
      
        default:
          break;
      }
    }


    return(
      componentToRender
    )
  }
  
}

export default App;
