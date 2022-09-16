import React, { useEffect, useRef, useState } from 'react'
import './selector.css'

const Selector = ({ tempCallback }) => {

  const tempRef = useRef();

  const [Temprature, setTemprature] = useState(20);
  const [Medium, setMedium] = useState('Celsius');
  // const [SliderPercentage, setSliderPercentage] = useState(20);

  useEffect(() => {
    switch (Medium) {
      case 'Celsius':
        if (Temprature < 0) {
          setTemprature(0);
        } else if (Temprature > 100) {
          setTemprature(100);
        }
        break;
      case 'Fahrenheit':
        if (Temprature < 32) {
          setTemprature(32);
        } else if (Temprature > 212) {
          setTemprature(132);
        }
        break;
      case 'Kelvin':
        if (Temprature < 273) {
          setTemprature(273);
        } else if (Temprature > 373) {
          setTemprature(373);
        }
        break;
    }
    // console.log(Temprature, Medium)
    
    // let min = tempRef.current.min;
    // let max = tempRef.current.max;
    // setSliderPercentage(100 * (Temprature- min) / (max - min)) ;
    
    tempCallback(Temprature, Medium) 

  }, [Medium, Temprature])

  return (
    <div className='selector'>
      <select onChange={(e) => { setMedium(e.target.value);  }} value={Medium} name="temp" id="temp">
        <option className='option' value="Celsius">Celsius</option>
        <option className='option' value="Fahrenheit">Fahrenheit</option>
        <option className='option' value="Kelvin">Kelvin</option>
      </select>
      <input onChange={(e) => { setTemprature(e.target.value);}} className='inpTemp' value={Temprature} type="number" />
      <input ref={tempRef} onChange={(e) => { setTemprature(e.target.value); }} className='range' min={Medium === 'Celsius' ? '0' : `${Medium === 'Fahrenheit' ? '32' : '273'}`} max={Medium === 'Celsius' ? '100' : `${Medium === 'Fahrenheit' ? '212' : '373'}`} value={Temprature} type="range" />
      <div className="showTemp">
        <strong>{Temprature}&deg;</strong> {Medium}
      </div>
    </div>
  )
}

export default Selector
