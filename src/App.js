import './App.css';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [clicksNum, setClicksNum] = useState(0)

  const addClick = () => {
    setClicksNum(clicksNum + 1);
  };

  const restartCounter = () => {
    setClicksNum(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt="Logo FreeCodeCamp" />
      </div>

      <div className='contenedor-contador'>

        <Counter clicksNum={clicksNum} />

        <Button 
        text ='Click'
        IsClickButton = {true}
        clickHandle = {addClick} />

        <Button 
        text ='Restart'
        IsClickButton = {false}
        clickHandle = {restartCounter} />
      </div>
    </div>
  );
}

export default App;
