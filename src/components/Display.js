import React, { useEffect, useRef } from 'react'
import './display.css'

const Display = ({tempVal}) => {

  console.log(tempVal)


  return (
    <div className='display'>
      <div className="dispInner">
        <div className="thermometer">
          <div style={{height:`${tempVal}%`}} className="temprature"></div>
        </div>
        <div className="scale">
          <div>-&ensp; 100&deg;</div>
          <div>-&ensp;  90&deg;</div>
          <div>-&ensp;  80&deg;</div>
          <div>-&ensp;  70&deg;</div>
          <div>-&ensp;  60&deg;</div>
          <div>-&ensp;  50&deg;</div>
          <div>-&ensp;  40&deg;</div>
          <div>-&ensp;  30&deg;</div>
          <div>-&ensp;  20&deg;</div>
          <div>-&ensp;  10&deg;</div>
          <div>-&ensp;   0&deg;</div>
        </div>
      </div>
      <div className="showTempDisplay ">
        {tempVal}&deg;
      </div>
    </div>
  )
}

export default Display
