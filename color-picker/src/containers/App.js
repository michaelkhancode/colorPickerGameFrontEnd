import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Boxlist from '../components/Boxlist/Boxlist';
import Score from '../components/Score/Score';
import Difficulty from '../components/Difficulty/Difficulty';
import User from '../components/User/User';
import TargetColor from '../components/TargetColor/TargetColor';
import "./App.css"
import Container from '@material-ui/core/Container';

const rgbString = () => {
  return `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        difficulty: 3,
        targetColor: rgbString()
      }
  };

  changeDifficulty = (difficulty) => {
    this.setState( {difficulty} )
  }

  generateBoxColors = () => {
    const { difficulty, targetColor }  = this.state ;
    let boxColorObject  = [];
    let targetBoxIndex  = Math.round( Math.random()*(difficulty-1) )
    for (var index = 0; index < difficulty; index++) {
      console.log(index,targetBoxIndex)
      targetBoxIndex === index 
      ? 
      boxColorObject.push( targetColor )
      :
      boxColorObject.push( rgbString() ) 
    }
    return boxColorObject;
  }

  render (){
    const { difficulty, targetColor } = this.state;
    console.log ( this.generateBoxColors() )
    return (
      <div>
        <Container className="container" maxWidth="lg" >
          <div className="flexBox">
            <Score />
            <User />
            <Navigation />
          </div> 
          <hr/>
          <div className="gridDifficultyTarget">
            <Difficulty changeDifficulty = { this.changeDifficulty } />
            <TargetColor targetColor = { targetColor } />
          </div>
          <Boxlist difficulty = { difficulty }  />
        </Container>
      </div>
    )
  }
};

export default App;
