import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import "./Difficulty.css"

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
}));

const noMargin = {margin:0};

const Difficulty = ({ changeDifficulty }) => {
    const classes = useStyles();

    return (
        <div style={{marginRight:"auto"}} >
            <Fab 
            color="primary" 
            size="large" 
            aria-label="add"
            style= {noMargin}
            className={classes.fab}
            onClick={() => changeDifficulty(3)}
            >
                3
            </Fab>
            <Fab 
            color="secondary" 
            aria-label="edit"
            style= {noMargin} 
            className={classes.fab}
            onClick={() => changeDifficulty(6)}
            >
                6
            </Fab>
            <Fab 
            variant="extended" 
            aria-label="delete" 
            style= {noMargin}
            className={classes.fab}
            onClick={() => changeDifficulty(9)}
            >
                9
            </Fab>
        </div>
    );
}

export default Difficulty;
