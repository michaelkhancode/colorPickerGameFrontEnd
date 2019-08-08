import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Box = ({ind, RGBColor, target, clickHandler}) => {

    const boxSytles = {
        height:"100px",
        width: "170px",
        backgroundColor:RGBColor,
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
            style={boxSytles} 
            variant="outlined" 
            className={classes.button}
            onClick={() => clickHandler(target, RGBColor)}
            >
            </Button>
        </div>
    )
}

export default Box; 
