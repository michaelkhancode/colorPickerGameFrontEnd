import React from 'react';
import RightOrWrongSymbol from '../RightOrWrongSymbol/RightOrWrongSymbol';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const RightOrWrongBox = ({ind, RGBColor, targetChoice}) => {
    
    const styleCorrect = {
        color: {color:"rgb(28, 238, 74)"},
        icon: faCheckCircle
    }

    const styleInCorrect = {
        color: {color:"rgb(218, 7, 7)"},
        icon: faTimesCircle
    }

    switch(targetChoice) {
        case null:
            return <span></span>
        case true:
            return <RightOrWrongSymbol style={ styleCorrect } />
        case false:
            return <RightOrWrongSymbol style={ styleInCorrect } />
        default:
            return <span></span>
        }              
}

export default RightOrWrongBox;

