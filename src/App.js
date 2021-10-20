import React, { useState } from 'react';
import Timer from './Components/Timer';
import ButtonComponent from './Components/ButtonComponent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import SignIn from './Components/SignIn';



function App() {

    const [ status, setStatus] = useState(0);
    const [ inter, setInter] = useState();
    const [ time, setTime] = useState({ ms:0, s:60, m:0, h:0});
    const [ show, setShow] = useState(false);

    const SendOtp = () => {
      run();
      setStatus(1);
      setInter(setInterval(run, 10));
    }

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
      if(updatedM === 60){
        updatedH++;
        updatedM = 0;
      }
      if(updatedS === 0){
        updatedM++;
        updatedS = 60;
      }
      if(updatedMs === 100){
        updatedS--;
        updatedMs = 0;
      }
      updatedMs++;
      return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    };

    const ResendOtp = () => {
      clearInterval(inter);
      setStatus(0);
      setTime({ms:0, s:0, m:0, h:0})
    };

    const resume = () => SendOtp();


  return (
    <div className="App" >
      <SignIn />
      <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2}}>
          <Link href="#"  onClick={() => setShow(!show)} variant="body2">
              Forgot password?
          </Link>
      </Grid>
      {
      show ? (<Grid container direction="row" justifyContent="center" alignItems="center"  sx={{ mt: 3, mb: 2, gap: 4 }}>
        <Grid><Timer time={time}/></Grid>
          <Grid><ButtonComponent status={status} SendOtp={SendOtp} ResendOtp={ResendOtp} resume={resume}/></Grid>
      </Grid>) : null
      }
      
    </div>
  );
}

export default App;
