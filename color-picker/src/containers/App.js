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
        targetColor: "Select A Difficulty",
        boxColors: ["rgb(167,254,17)","rgb(167,254,17)","rgb(167,254,17)"]
      }
  };

  changeDifficulty = (difficulty) => {
    // this.setState({difficulty}, () => {
    //   this.resetColors()
    // })

    this.setState(
      (state) => {return {difficulty, targetColor:rgbString()}},
      this.resetColors
    )
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("componentDidUpdate")
  //   console.log("prevState", prevState);
  // }

  resetColors = () => {
    const { difficulty, targetColor }  = this.state ;
    let boxColors       = [];
    let targetBoxIndex  = Math.round( Math.random()*(difficulty-1) )
    for (var index = 0; index < difficulty; index++) {
      targetBoxIndex === index 
      ? 
      boxColors.push( targetColor )
      :
      boxColors.push( rgbString() ) 
    }
    this.setState({ boxColors });
  }

  render (){
    const { difficulty, targetColor, boxColors } = this.state;
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
          <Boxlist difficulty = { difficulty } boxColors = { boxColors } />
        </Container>
      </div>
    )
  }
};

export default App;
