import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tilt from 'react-tilt'
import TimerCountdown from './TimerCountdown/TimerCountdown';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
}));

const HeaderMessage = ({ nonLiveColor, changeGameStage, headerMessage, gameStage, startStopwatch }) => {
    const classes = useStyles();

    let timerDisplay;
    let headerDisplay;

    // console.log(nonLiveColor)

    switch (gameStage) {
        case "countDownStart":
        case "countDownMid":
            timerDisplay={display:"block"};
            headerDisplay={display:"none"};
            break;
        default:
            timerDisplay={display:"none"};
            headerDisplay={display:"block"};
            break;
    }

    return (
        <div style={{margin:"auto"}}>
            <Tilt className="Tilt" options={{ max : 25 }} >
                <Paper style={{justifyContent:"center"}} className={classes.root}>
                    <Typography variant="h5" component="h1">

                        <TimerCountdown style={timerDisplay} startStopwatch={ startStopwatch } changeGameStage={ changeGameStage } gameStage={ gameStage } />
                        <div style={headerDisplay}> { `${headerMessage.toUpperCase()}` }</div>

                    </Typography>
                </Paper>
            </Tilt>
        </div>
    );
}

export default HeaderMessage;
 

