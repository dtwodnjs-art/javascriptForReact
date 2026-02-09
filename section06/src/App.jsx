import { useState } from 'react'
import Viewer2 from './components/Viewer2';
import InputController from './components/InputController';

function App() {
  const [calculate, setCalculate] = useState(0);
  const onClickCalculate = (num1, num2, op)=>{
    let sum = 0; 
    switch (op) {
      case '+':
        sum = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        sum = parseInt(num1) - parseInt(num2);
        break;
      case '/':
        sum = parseInt(num1) / parseInt(num2);
        break;
      case '*':
        sum = parseInt(num1) * parseInt(num2);
        break;
    }  
    setCalculate(sum)
  }; 

  return (
    <>
    <div className="App">
      <div>
        <h1>계산기</h1>
      </div>
      <Viewer2 calculate={calculate}/>
      <InputController onClickCalculate={onClickCalculate} />
    </div>
    </>
  )
}

export default App