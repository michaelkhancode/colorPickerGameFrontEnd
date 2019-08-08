import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Boxlist from '../components/Boxlist/Boxlist';
import Score from '../components/Score/Score';
import Difficulty from '../components/Difficulty/Difficulty';
import User from '../components/User/User';
import HeaderMessage from '../components/HeaderMessage/HeaderMessage';
import RightOrWrongBox from '../components/RightOrWrongBox/RightOrWrongBox';
import Timer from '../components/Timer/Timer';
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
        headerMessage: "Select A Difficulty",
        boxColors: [{color:"rgb(167,254,17)", target:false},{color:"rgb(167,254,17)", target:false},{color:"rgb(167,254,17)", target:false}],
        targetColor: null,
        targetChoice: null,
        gameStage: "blank"
      }
  };

  changeDifficulty = (difficulty) => {
    this.setState(
      (state) => {
        return {difficulty, targetColor:rgbString(), headerMessage:"press start", gameStage:"difficultySelectedPreStart" }
      },this.generateColors
    )
  }

  startTimer = () => {
    console.log(this.state.targetColor)
    this.setState(
      (state) => {
        return {headerMessage:this.state.targetColor, gameStage:"liveSession" }
      }
    )
  }

  clickHandler = (target, RGBColor) => {
    this.setState(
      (state) => {
        return { targetChoice:target }
      },() => {
        target ? this.correctChoice(RGBColor) : this.incorrectChoice(RGBColor)
      } 
    )
  }

  reportTime = (timerTime) => {
    console.log(timerTime)
  }

  correctChoice = (RGBColor) => {
    this.setState ( 
      (state) => {
        return {gameStage:"victory"}
      },() =>{
        this.generateColors("v")  
      }
    )
  }

  incorrectChoice = (RGBColor) => {
  }

  generateColors = (v) => {
    const { difficulty, targetColor }  = this.state;
    let boxColors       = [];
    let targetBoxIndex  = Math.round( Math.random()*(difficulty-1) )

    const vicotryColors = () => {
      for (var index = 0; index < difficulty; index++) { 
        boxColors.push( {color:targetColor, target:false} ) 
      }
      this.setState((state) => {return {boxColors}});
    }

    const resetColors = () => {
      for (var index = 0; index < difficulty; index++) {
        targetBoxIndex === index 
        ? 
        boxColors.push( {color:targetColor, target:true} )
        :
        boxColors.push( {color:rgbString(), target:false} ) 
      }
      this.setState((state) => {return {boxColors, targetChoice:null}});
    }

    v === "v" ? vicotryColors() : resetColors()
  }

  render (){
    const { headerMessage, boxColors, targetChoice } = this.state;
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
            <HeaderMessage headerMessage = { headerMessage } />
          </div>
          <div className="flexBox">
            <div className="boxlistFlexWrapper">
              <Boxlist clickHandler={ this.clickHandler } boxColors={ boxColors } />
            </div>
            <div className="timerRightOrWrongFlexWrapper">
              <div  className="timerAndRightOrWrongGridWrapper">
                <div ><Timer startTimer={this.startTimer} reportTime={this.reportTime} gameStage={ this.state.gameStage } /></div>
                <div style={{width:"80px", margin:"auto"}}><RightOrWrongBox targetChoice= {targetChoice} /></div>
              </div>
            </div>
          </div>
          </Container>
      </div>
    )
  }
};

export default App;
