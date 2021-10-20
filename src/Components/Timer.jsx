import React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Button'

function Timer(props) {

    const h = () => {
        if(props.time.h === 0){
          return '';
        }else {
          return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
        }
     }


    return (
        <div>
            {h()}
            <Box component="h3" sx={{ bgcolor: 'grey', color: 'red'}}>
                <Typography><span>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span></Typography>&nbsp;:&nbsp;
                <Typography><span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span></Typography>
            </Box>
        </div>
    )
}

export default Timer
