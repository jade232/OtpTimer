import React, { useState } from 'react';
import Timer from './Components/Timer';
import ButtonComponent from './Components/ButtonComponent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import SignIn from './Components/SignIn';
import { Button } from '@mui/material';

import "./App.css"

function App() {

  // const [status, setStatus] = useState(0);
  // const [inter, setInter] = useState();
  // const [time, setTime] = useState({ ms: 0, s: 60, m: 0, h: 0 });
  // const [show, setShow] = useState(false);

  // const SendOtp = () => {
  //   run();
  //   setStatus(1);
  //   setInter(setInterval(run, 10));
  // }

  // var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  // const run = () => {
  //   if (updatedM === 60) {
  //     updatedH++;
  //     updatedM = 0;
  //   }
  //   if (updatedS === 0) {
  //     updatedM++;
  //     updatedS = 60;
  //   }
  //   if (updatedMs === 100) {
  //     updatedS--;
  //     updatedMs = 0;
  //   }
  //   updatedMs++;
  //   return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  // };

  // const ResendOtp = () => {
  //   clearInterval(inter);
  //   setStatus(0);
  //   setTime({ ms: 0, s: 0, m: 0, h: 0 })
  // };

  // const resume = () => SendOtp();

  const [count, setCount] = React.useState(10)
  const [click, setClick] = React.useState(false)

  // const runTimer = () => {

  // }

  const Start = () => {
    if (click === true && count > 0) {
    }
  }


  // React.useEffect(() => {

  //   if (!click) {
  //     count > 0 && setTimeout(() => setCount(count - 1), 1000);
  //   }

  // }, [count])

  return (
    <div className="App" >
      {/* <SignIn />
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
        <Link href="#" onClick={() => setShow(!show)} variant="body2">
          Forgot password?
        </Link>
      </Grid>
      {
        show ? (<Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 3, mb: 2, gap: 4 }}>
          <Grid><Timer time={time} /></Grid>
          <Grid><ButtonComponent status={status} SendOtp={SendOtp} ResendOtp={ResendOtp} resume={resume} /></Grid>
        </Grid>) : null
      } */}
      {/* <div className='btn-container'>
        <Button className="btn-buddy">Start</Button>
      </div> */}

      <div className='ball-container'>
        <div className='red-dot'></div>
        <div className='green-dot'></div>
        <div className='purple-dot'></div>
        <div className='blue-dot'></div>
      </div>


      {/* <h4>Hello</h4> */}

      {/* {count} */}

    </div>
  );
}

export default App;
