import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Boxlist from '../../components/Boxlist/Boxlist';
import Difficulty from '../../components/Difficulty/Difficulty';
import User from '../../components/User/User';
import HeaderMessage from '../../components/HeaderMessage/HeaderMessage';
import RightOrWrongBox from '../../components/RightOrWrongBox/RightOrWrongBox';
import TimerStopwatch from '../../components/TimerStopwatch/TimerStopwatch';
import "./MainGame.css"
import Container from '@material-ui/core/Container';

const rgbString = () => {
  return `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`
};

class MainGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        difficulty: 3,
        headerMessage: "Select A Difficulty",
        boxColors: new Array(3).fill({ color:rgbString(), target:false }),
        targetColor: null,
        targetChoice: null,
        round:        1,
        user: this.props.props.location.state.user, 
        gameStage: "blank"   // blank, difficultySelectedPreStart, countDownStart, countDownMid, countDownEnd, liveSession, roundVictory, gameVictory
      }
  };

  // make all thee callbacks in setState's call appRouter, and app router will work off of gameStage

  appRouter = () => {
    switch(this.state.gameStage) {
      case ("difficultySelectedPreStart"):
        this.setState({round:1})
        this.anyColorYouLike(rgbString())
        break;
      case "liveSession":
        this.setState({headerMessage:this.state.targetColor})
        this.resetColors()
      break;
      case "roundVictory":
        this.miniReset()
        break;
      case "gameVictory":
        this.vicotryColors()
        break;
      default:
    }
  }

  changeGameStage = (gameStage) => {
    this.setState( {gameStage} )
  }

  changeDifficulty = (difficulty) => {
    if (this.state.gameStage === "difficultySelectedPreStart" ||
        this.state.gameStage === "blank") {
      this.setState(
        (state) => {
          return {difficulty, headerMessage:"press start", gameStage:"difficultySelectedPreStart" }
        }, this.appRouter
      )
    }
  }

  roundReset = () => {
    this.setState(
      (state) => {
        return {targetColor:rgbString(),}
      },this.resetColors
    )
  }

  startStopwatch = () => {

    if  (this.state.round === 1 &&
        (this.state.gameStage === "difficultySelectedPreStart" || this.state.gameStage === "blank" )) {
          this.setState(
            (state) => {
              return {gameStage:"countDownStart"}
            }
          )
    }

    if (this.state.gameStage === "countDownEnd") {
      this.setState(
        (state) => {
          return {gameStage:"liveSession"}
        },() => { this.resetTargetColor(this.appRouter) }
      )
    }
  }

  countDownStartToCountDownMid = () => {
    if (this.state.gameStage === "countDownStart") {
      this.setState({gameStage:"countDownMid"}) 
    }
  }

  resetTimer = () => {
    this.setState(
      (state) => {
        return {headerMessage:"press start", gameStage:"difficultySelectedPreStart" }
      }, this.appRouter
    )
  }

  clickHandler = (target, RGBColor) => {
    if (this.state.gameStage === "liveSession" ||
        this.state.gameStage === "roundVictory" ||
        this.state.gameStage === "gameVictory" ) {
          if (target) {
            if (this.state.round < 5) {
              this.setState(
                (prevState) => {
                  return { targetChoice:target, gameStage:"roundVictory", round: prevState.round + 1 }
                }, this.appRouter
              )
            } else {
                this.setState(
                  (prevState) => {
                    return { targetChoice:target, gameStage:"gameVictory", round: prevState.round + 1 }
                  }, this.appRouter
                )
              }
          } else {
            this.setState(
              (prevState) => {
                return { targetChoice:target }
              }
            )
          }
        }
  }

  reportTime = (gameVictoryTime) => {
    alert(`${gameVictoryTime.hours} : ${gameVictoryTime.minutes} : ${gameVictoryTime.seconds} : ${gameVictoryTime.centiseconds}`)
  }

  resetTargetColor = (callback) => {
    if (callback) {
      this.setState ( 
        (state) => {
          return {targetColor:rgbString()}
        }, callback
      ) 
    } else {
      this.setState ( 
        (state) => {return {targetColor:rgbString()}} 
      )
    }
  }
    
  anyColorYouLike = (RGBString) => {
      let boxColors       = [];
      for (var index = 0; index < this.state.difficulty; index++) { 
        boxColors.push( {color:RGBString, target:false} ) 
      }
      this.setState((state) => {return {boxColors}});
    }

  vicotryColors = () => {
    let boxColors       = [];
    for (var index = 0; index < this.state.difficulty; index++) { 
      boxColors.push( {color:this.state.targetColor, target:false} ) 
    }
    this.setState((state) => {return {boxColors}});
  }

  resetColors = () => {
    let boxColors       = [];
    let targetBoxIndex  = Math.round( Math.random()*(this.state.difficulty-1) )
    for (var index = 0; index < this.state.difficulty; index++) {
      targetBoxIndex === index 
      ? 
      boxColors.push( {color:this.state.targetColor, target:true} )
      :
      boxColors.push( {color:rgbString(), target:false} ) 
    }
    this.setState((state) => {return {boxColors, targetChoice:null, headerMessage:this.state.targetColor}});
  }

  miniReset = (flag) => {
    if (!flag) {
      this.vicotryColors()
      setTimeout( 
        () => { 
          this.miniReset(true) 
        }, 1000 )
      return;
    }
    this.resetTargetColor(this.resetColors)
  }

  render (){
    const { headerMessage, boxColors, targetChoice, nonLiveColor } = this.state;
    return (
      <div>
        <Container className="container" maxWidth="lg" >
          <div
          style ={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr"}} 
          >
            <User style={{gridColumn: 2}} name = {this.state.user.name} />
            <Navigation  />
          </div> 
          <hr/>
          <div className="gridDifficultyTarget">
            <Difficulty changeDifficulty = { this.changeDifficulty } />
            <HeaderMessage nonLiveColor={nonLiveColor} startStopwatch={ this.startStopwatch } changeGameStage={ this.changeGameStage } headerMessage={ headerMessage } gameStage={ this.state.gameStage} />
          </div>
          <div className="flexBox">
            <div className="boxlistFlexWrapper">
              <Boxlist clickHandler={ this.clickHandler } boxColors={ boxColors } />
            </div>
            <div className="timerRightOrWrongFlexWrapper">
              <div  className="timerAndRightOrWrongGridWrapper">
                <div ><TimerStopwatch resetTimer={this.resetTimer} changeGameStage={ this.changeGameStage } startStopwatch={this.startStopwatch} reportTime={this.reportTime} gameStage={ this.state.gameStage } /></div>
                <div style={{width:"80px", margin:"auto"}}><RightOrWrongBox targetChoice= {targetChoice} /></div>
              </div>
            </div>
          </div>
          </Container>
      </div>
    )
  }
};

export default MainGame;
