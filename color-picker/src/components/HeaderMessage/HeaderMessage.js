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

const HeaderMessage = ({ changeGameStage, headerMessage, gameStage }) => {
    const classes = useStyles();


// let x;
// if (gameStage === "countDownStart" || 
//     gameStage === "countDownMid") {
//     x = <TimerCountdown changeGameStage={ changeGameStage }  gameStage={ gameStage } />
// } else {
//      x = <span> { `${headerMessage.toUpperCase()}` } </span>
// }

    return (
        <div style={{margin:"auto"}}>
            <Tilt className="Tilt" options={{ max : 25 }} >
                <Paper style={{justifyContent:"center"}} className={classes.root}>
                    <Typography variant="h5" component="h1">
                        
                        {/* {x} */}
                        <span> { `${headerMessage.toUpperCase()}` }</span>

                    </Typography>
                </Paper>
            </Tilt>
        </div>
    );
}

export default HeaderMessage;
 

