import React from 'react';
import Box from '../Box/Box';
import Container from '@material-ui/core/Container';
import  './Boxlist.css';

const Boxlist = ({ boxColors }) => {
    const boxlist           = [];
    const gridWrapper = {
        display:"grid",
        gridTemplateColumns: "1fr 1fr 1fr"
    }

    // console.log(boxColors)
    // for (var index = 0; index < difficulty; index++) {
    //     console.log(boxColors, difficulty, index)
    //     boxlist.push( <Box key={index} ind={index} RGBColor={boxColors[index].color} /> )
    // }
    let index = 0;
    for (let box of boxColors) {
        console.log(box, index)
        boxlist.push( <Box key={index} ind={index} RGBColor={box.color} target={box.target} /> )
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

