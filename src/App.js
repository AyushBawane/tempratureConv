import './App.css';
import Selector from './components/Selector';
import Display from './components/Display';
import { useState } from 'react';

function App() {

  const [Temp, setTemp] = useState(20)

  const handleTempChange = (data) => {
      setTemp(data);
      // console.log(data)
  }

  return (
    <div className="App">
      <Selector tempCallback={handleTempChange}/>
      <Display tempVal={Temp}/>
    </div>
  );
}

export default App;
