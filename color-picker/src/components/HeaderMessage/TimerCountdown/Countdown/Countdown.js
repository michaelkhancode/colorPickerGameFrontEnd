import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Countdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 5000
        }
    }

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
            clearInterval(this.timer);
            this.setState({ timerOn: false, timerTime: 5000 });
            alert("Countdown ended");
          }
        }, 10);
      };

    stopTimer = () => {
      clearInterval(this.timer);
      this.setState({ timerOn: false });
    };

    resetTimer = () => {
      if (this.state.timerOn === false) {
        this.setState({
          timerTime: this.state.timerStart
        });
      }
    };

    render() {
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = (""+(Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        // let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
        // let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

        return (
        <div>
            <div className="Countdown">
                {seconds}
            </div>
            <Button 
            style={{backgroundColor:"rgb(65, 209, 8)", color:"white" }} 
            variant="outlined" 
            size="small" 
            onClick={this.startTimer}
            >
                    Start
            </Button>
        </div>
        );
    }
}
export default Countdown;
