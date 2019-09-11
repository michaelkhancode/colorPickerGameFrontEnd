import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RightOrWrongSymbol = ({ style }) => {

    return (
        <div>
            <FontAwesomeIcon size="5x" style={style.color} icon={style.icon} className="face" />
        </div>
    )
}

export default RightOrWrongSymbol