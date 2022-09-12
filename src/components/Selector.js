import React, { useState } from 'react'
import './selector.css'

const Selector = ({tempCallback}) => {

  const [Temprature, setTemprature] = useState(20);
  const [Medium, setMedium] = useState('Celsius');

  return (
    <div className='selector'>
        <select onChange={(e)=>{setMedium(e.target.value)}} value={Medium} name="temp" id="temp">
          <option  className='option' value="Celsius">Celsius</option>
          <option className='option' value="Fahrenheit">Fahrenheit</option>
          <option className='option' value="Kelvin">Kelvin</option>
        </select>
        <input onChange={(e)=>{setTemprature(e.target.value); tempCallback(e.target.value)}} className='range' min='0' max='100' value={Temprature} type="range" />
        <div className="showTemp">
          <strong>{Temprature}&deg;</strong> {Medium}
        </div>
    </div>
  )
}

export default Selector
