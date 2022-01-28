import React from 'react';
import './App.css';
import {Stepper, Step, StepLabel, makeStyles} from '@material-ui/core'

const App = () => {

  const useStyles = makeStyles(() => ({
    root : {
      "& .MuiStepIcon-root" : {color:"green"},
      "& .MuiStepIcon-completed" : {color:"rgb(15, 151, 175)"},
      "& .MuiStepIcon-active" : {color:"rgb(15, 151, 175)"},
      "& .MuiStepIcon-text" : {color:"rgb(15, 151, 175)"},
      "& .MuiStepLabel-label" : {color:"rgb(15, 151, 175)"},
      
    }
  }));

  const stl = useStyles();

    return (
      <div className="container">
        <div className="box">
          <div className='parts'>
          <div className='part1'>
            <div className="left">
            <h1 className='center'>Sign Up</h1>
              <Stepper activeStep={1} className={stl.root} alternativeLabel>
                <Step key={1}>
                  <StepLabel>Academics</StepLabel>
                </Step>
                <Step key={2}>
                  <StepLabel>Personal Details</StepLabel>
                </Step>
                <Step key={3}>
                  <StepLabel>Contact</StepLabel>
                </Step>
                <Step key={4}>
                  <StepLabel>Submit</StepLabel>
                </Step>
              </Stepper>
              <h1>Personal Details : </h1>
              <div className='name'>
                <input className='input input_left' type='text' placeholder='First Name'></input>
                <input className='input input_right' type='text' placeholder='Last Name'></input> 
              </div>
              <div className='name'>
                <input className='input input_left' type='text' placeholder='School Name'></input>
                <input className='input input_right' type='text' placeholder='City'></input> 
              </div>
              <div className='center btn'>
                <button className='button_white previous'>Previous</button> <br></br>
                <button className='button_white next'>Next</button>
              </div>
            </div>
          </div>
          <div className='part2'>
            <div className="right">
              <h1 className='center'>Hello, Students!</h1>
              <h3 className='para'>if you have already filled the signup form once, just click on login button and start learning.</h3>
              <div className='center btn'>
                <button className='button'>Login for students</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
}

export default App;
