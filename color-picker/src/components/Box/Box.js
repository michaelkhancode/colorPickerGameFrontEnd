import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Box.css"

const Box = ({ind, RGBColor, target}) => {

    const boxColor = {
        color:"pink",
        backgroundColor:RGBColor
    }

    const useStyles = makeStyles(theme => ({
        button: {
          margin: theme.spacing(1),
        },
      }));

      const classes = useStyles();

    return (
        <div>
            <Button
            style={boxColor} 
            variant="outlined" 
            className={classes.button}
            >
                {`Im a Box ${ind} and im ${target}`}
            </Button>
        </div>
    )
}

export default Box;
