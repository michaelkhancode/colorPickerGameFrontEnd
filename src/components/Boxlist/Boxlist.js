import React from 'react';
import Box from '../Box/Box';
import Container from '@material-ui/core/Container';

const Boxlist = ({ boxColors, clickHandler }) => {
    const boxlist           = [];
    const gridWrapper = {
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr"
    }

    let index = 0;
    for (let box of boxColors) {
        boxlist.push( <Box key={index} clickHandler={clickHandler} ind={index} RGBColor={box.color} target={box.target} /> )
        index++
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

