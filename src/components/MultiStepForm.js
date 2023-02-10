import React from 'react'
import '../Css/MultiStepForm.css'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepForm = (props) => {
  return (
    <ProgressBar
        percent={((props.step - 1) * 100) / 2}
        filledBackground="linear-gradient(to right, #0086A7, #0076A7)"
        unfilledBackground='transparent'
        height='2px'>
        <Step transition="scale">
          {({ accomplished, index }) => (
              <div className={`step ${accomplished ? 'completed' : ''}`}>1</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? 'completed' : ''}`}>2</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? 'completed' : ''}`}>3</div>
          )}
        </Step>
      </ProgressBar>
  )
}

export default MultiStepForm