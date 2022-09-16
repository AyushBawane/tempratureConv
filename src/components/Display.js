import React, { useEffect, useRef, useState } from 'react'
import './display.css'

const Display = ({ tempVal, MedVal }) => {

  const [Medium, setMedium] = useState('Celsius');
  const [ConvertedTemp, setConvertedTemp] = useState(20);
  const [ThermoPercentage, setThermoPercentage] = useState(0);
  // console.log(tempVal)
  // console.log(MedVal)


  useEffect(() => {

    function FromCelsius(params) {
      setThermoPercentage(100 * (params - 0) / (100 - 0) + 0)
      switch (Medium) {
        case 'Celsius':
          return params;
          break;
        case 'Fahrenheit':
          // console.log(params)
          return (params * 9 / 5) + 32;
          break;
        case 'Kelvin':
          return params + 273.15
          break;
        default:
          break;
      }
    }

    //function for conversion from fahrenheit
    function FromFahrenheit(params) {
      setThermoPercentage(100 * (params - 32) / (212 - 32) + 0)
      switch (Medium) {
        case 'Celsius':
          return (params - 32) * 5 / 9
          break;
        case 'Fahrenheit':
          return params;
          break;
        case 'Kelvin':
          return (params + 459.67) * (5 / 9)
          break;
        default:
          break;
      }
    }

    //function for conversion from kelvin
    function FromKelvin(params) {
      setThermoPercentage(100 * (params - 273) / (373 - 273) + 0)
      switch (Medium) {
        case 'Celsius':
          return params - 273.15
          break;
        case 'Fahrenheit':
          return (params * 9 / 5) - 459.67;
          break;
        case 'Kelvin':
          return params;
          break;
        default:
          break;
      }
    }

    let result;
    // alert(tempToConv.value);
    switch (MedVal) {
      case 'Celsius':
        result = FromCelsius(parseFloat(tempVal));
        setConvertedTemp(parseInt(result))
        // console.log('from cel')
        break;
      case 'Fahrenheit':
        result = FromFahrenheit(parseFloat(tempVal));
        setConvertedTemp(parseInt(result))
        // console.log('from fer')
        break;
      case 'Kelvin':
        result = FromKelvin(parseFloat(tempVal));
        setConvertedTemp(parseInt(result))
        // console.log('from kel')
        break;
    }
    // console.log(parseInt(result))

    console.log(ThermoPercentage)

  }, [Medium, tempVal, MedVal])


  return (
    <div className='display'>
      <div className="">
        <select onChange={(e) => { setMedium(e.target.value) }} value={Medium} name="temp" id="tempD">
          <option className='option' value="Celsius">Celsius</option>
          <option className='option' value="Fahrenheit">Fahrenheit</option>
          <option className='option' value="Kelvin">Kelvin</option>
        </select>
      </div>
      <div className="dispInner">
        <div className="thermometer">
          <div style={{ height: `${ThermoPercentage}%` }} className="temprature"></div>
        </div>
        {Medium === 'Celsius' ?
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
          :
          <>{Medium === 'Fahrenheit' ?
            <div className="scale">
              <div>-&ensp; 212&deg;</div>
              <div>-&ensp;  194&deg;</div>
              <div>-&ensp;  176&deg;</div>
              <div>-&ensp;  158&deg;</div>
              <div>-&ensp;  140&deg;</div>
              <div>-&ensp;  122&deg;</div>
              <div>-&ensp;  104&deg;</div>
              <div>-&ensp;  86&deg;</div>
              <div>-&ensp;  68&deg;</div>
              <div>-&ensp;  50&deg;</div>
              <div>-&ensp;  32&deg;</div>
            </div> :
            <div className="scale">
              <div>-&ensp; 373&deg;</div>
              <div>-&ensp; 363&deg;</div>
              <div>-&ensp; 353&deg;</div>
              <div>-&ensp; 343&deg;</div>
              <div>-&ensp; 333&deg;</div>
              <div>-&ensp; 323&deg;</div>
              <div>-&ensp; 313&deg;</div>
              <div>-&ensp; 303&deg;</div>
              <div>-&ensp; 293&deg;</div>
              <div>-&ensp; 283&deg;</div>
              <div>-&ensp; 273&deg;</div>
            </div>
          }</>

        }
      </div>
      <div className="showTempDisplay">{ConvertedTemp}&deg; {Medium}</div>
    </div>
  )
}

export default Display
