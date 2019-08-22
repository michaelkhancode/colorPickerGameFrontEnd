import React from "react";
import Button from '@material-ui/core/Button';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false, //if the stopwatch is off or on
            timerStart: 0,  //starting point of timer in ms
            timerTime: 0    //the current time value of stopwatch
        };
    }

    startStopwatch = () => {                                        //start the timer
        if (this.props.gameStage === "difficultySelectedPreStart" || this.props.gameStage === "blank") {
            this.props.startStopwatch()
        }

        if (this.props.gameStage === "countDownEnd") {
            console.log(this.props.gameStage)
            const { timerTime } = this.state
            this.props.startStopwatch()
            this.setState({                                         
                timerOn:true,                                      //flagged to true, as timer has been started
                timerStart: Date.now() - this.state.timerTime,     //if started fresh, subtracting from Date.now() makes no difference, if pausesd, and restarted new baseline is calculated
                timerTime                                          //start the timer at the specified starting point
            })

            this.timer = setInterval( () => {                      //every 10 milliseconds update the timer time
                this.setState({
                    timerTime: Date.now() - this.state.timerStart  //difference in starting time and current time gives elapsed time
                });
            }, 10)
        }
    }

    resetTimerMidSession = () => {
        if (
            this.props.gameStage === "liveSession" ||
            this.props.gameStage === "roundVictory" || 
            this.props.gameStage === "gameVictory" 
             ) {
            this.resetTimer()
        }
    };

    resetTimer = () => {
        this.props.resetTimer()
        this.setState({
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        });
        clearInterval(this.timer);
    };
    
    componentDidUpdate() {
        if (
            this.props.gameStage === "gameVictory" &&
            this.state.timerTime != 0
            ) {
            const gameVictoryTime = this.state.timerTime
            this.resetTimer()
            this.props.reportTime( this.formatTime(gameVictoryTime))
        }

        if (this.props.gameStage === "countDownEnd") {
            this.startStopwatch(this.props.gameStage)
        }
    }

    formatTime = (timeInMs) => {
        let hours = (
            "0" + 
            Math.floor(timeInMs / 3600000) // total time in hours 
            ).slice(-2)                     // only take the last 2 numbers
        let minutes = (
            "0" +
            (
                Math.floor(timeInMs / 60000) // total time in minutes
                % 60                          // divide the hours, take the remaining minutes
            )).slice(-2);                     // only take the last 2 numbers
        // same idea for below, we get hours, minutes, seconds, centiseconds, to 2 points percision
        let seconds = ("0" + (Math.floor(timeInMs / 1000) % 60)).slice(-2);
        let centiseconds = ("0" + (Math.floor(timeInMs / 10) % 100)).slice(-2);
        return {hours, minutes, seconds, centiseconds};
    }

    render() {
        const { timerTime } = this.state;
        let formattedTime = this.formatTime(timerTime)
        return (
        <div className="Stopwatch">
            <div className="Stopwatch-Display" style={{marginBottom:"10px"}}>
                {formattedTime.hours} : {formattedTime.minutes} : {formattedTime.seconds} : {formattedTime.centiseconds}
            </div>
            <div style={{display:"flex", justifyContent:"space-evenly" }}>
                <div >
                    <Button variant="outlined" color="primary" onClick={this.startStopwatch}>
                        Start
                    </Button>
                </div>            
                <div >
                    <Button variant="outlined" color="secondary" onClick={this.resetTimer}>
                        Reset
                    </Button>
                </div>
            </div>
        </div>
        );
    }
}
export default Stopwatch;