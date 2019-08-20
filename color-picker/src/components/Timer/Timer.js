import React from "react";
import Stopwatch from "./Stopwatch/Stopwatch";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Timer extends React.Component  {
  constructor( props ){
    super(props);
  }

  render() {
    return (
      <div className="Timer">
        <Paper elevation={5} square>
            <Typography align="center" variant="h5" component="h3">
              <Stopwatch startTimer={this.props.startTimer} resetTimer={this.props.resetTimer} reportTime={this.props.reportTime} gameStage={this.props.gameStage} />
            </Typography>
        </Paper>
      </div>
    );
  }
}

export default Timer;