import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faGrinStars } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Countdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 4000
        }
    }

    // blank, difficultySelectedPreStart, countDownStart, countDownMid, countDownEnd, liveSession, roundVictory, gameVictory
    startTimer = () => {
            this.setState({
              timerOn: true,
              timerTime: this.state.timerTime,
              timerStart: this.state.timerTime
            });
    
            this.timer = setInterval(() => {
              const newTime = this.state.timerTime - 10;
              if (newTime >= 0) {
                this.setState({
                  timerTime: newTime
                });
              } else {
                this.setState({ timerOn: false, timerTime: 5000 });
                this.props.changeGameStage("countDownEnd")
                clearInterval(this.timer);
              }
            }, 10);
      };

      componentDidUpdate(props, state) {
        if (this.props.gameStage === "countDownStart") {
            this.startTimer()
            this.props.changeGameStage("countDownMid")
        }
    }

    render() {
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = (""+(Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        // console.log(this.props)

        return (
        <div>
            <div className="Countdown">
            <FontAwesomeIcon style={{color:this.props.nonLiveColor}} size="2x" icon={faGrinStars}/>   <span>{seconds}</span>   <FontAwesomeIcon size="2x" icon={faGrinStars}/>
            </div>
        </div>
        );
    }
}
export default Countdown;
