
import './App.css';
import { Button } from './components/Button';
import {Screen} from './components/Screen'
import{ButtonClear} from './components/ButtonClear';
import{useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [UserInput, setUserInput] = useState(' ');

  const addUserInput = value => {
    setUserInput(UserInput + value);

  };

  const manageClear = () =>{
    setUserInput('')
  };

  const result = () =>{
    setUserInput(evaluate(UserInput)); 
    }

  

  return (
    <div className="App">
      <h1 className="title">Calculator App</h1>
      <div className="Calculator-main-container">
        <Screen Input={UserInput} />
        <div className="calculador-container">
          <div className="row">
            <Button manageClick={addUserInput}>1</Button>
            <Button manageClick={addUserInput}>2</Button>
            <Button manageClick={addUserInput}>3</Button>
            <Button manageClick={addUserInput}>-</Button>
          </div>
          <div className="row">
            <Button manageClick={addUserInput}>4</Button>
            <Button manageClick={addUserInput}>5</Button>
            <Button manageClick={addUserInput}>6</Button>
            <Button manageClick={addUserInput}>*</Button>
          </div>
          <div className="row">
            <Button manageClick={addUserInput}>7</Button>
            <Button manageClick={addUserInput}>8</Button>
            <Button manageClick={addUserInput}>9</Button>
            <Button manageClick={addUserInput}>/</Button>
          </div>
          <div className="row">
            <Button manageClick={addUserInput}>0</Button>
            <Button manageClick={addUserInput}>.</Button>
            <Button manageClick={result}>=</Button>
            <Button manageClick={addUserInput}>+</Button>
          </div>
          <div className="row">
            <ButtonClear manageClear={manageClear}>Clear</ButtonClear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
