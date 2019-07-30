import React from 'react';
import Box from '../Box/Box';
import Container from '@material-ui/core/Container';
import  './Boxlist.css';

const Boxlist = ({ difficulty, boxColors }) => {
    const boxlist           = [];
    const gridWrapper = {
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr"
    }

    for (var index = 0; index < difficulty; index++) {
        boxlist.push( <Box key={index} ind={index} RGBColor={boxColors[index]} /> )
    }

    return (
        <div>
            <Container style={gridWrapper} maxWidth="sm" >
                {boxlist}
            </Container>
        </div>
    )
}

export default Boxlist;

