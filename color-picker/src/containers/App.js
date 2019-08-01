import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Boxlist from '../components/Boxlist/Boxlist';
import Score from '../components/Score/Score';
import Difficulty from '../components/Difficulty/Difficulty';
import User from '../components/User/User';
import TargetColor from '../components/TargetColor/TargetColor';
import RightOrWrongBox from '../components/RightOrWrongBox/RightOrWrongBox';
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
        boxColors: [{color:"rgb(167,254,17)", target:false},{color:"rgb(167,254,17)", target:false},{color:"rgb(167,254,17)", target:false}]
      }
  };

  changeDifficulty = (difficulty) => {
    console.log("changeDifficulty")
    this.setState(
      (state) => {
        return {difficulty, targetColor:rgbString()}
      },
      this.resetColors
    )
  }

  correctChoice = () => {

  }

  resetColors = () => {
    console.log("resetColors")
    const { difficulty, targetColor }  = this.state;
    let boxColors       = [];
    let targetBoxIndex  = Math.round( Math.random()*(difficulty-1) )
    for (var index = 0; index < difficulty; index++) {
      targetBoxIndex === index 
      ? 
      boxColors.push( {color:targetColor, target:true} )
      :
      boxColors.push( {color:rgbString(), target:false} ) 
    }
    this.setState((state) => {return {boxColors}});
  }

  render (){
    console.log("render")
    const { targetColor, boxColors } = this.state;
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
          <Boxlist boxColors = { boxColors } />
          <RightOrWrongBox />
          <svg className="test" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </Container>
      </div>
    )
  }
};

export default App;
