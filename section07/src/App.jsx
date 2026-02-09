import { useState, useEffect, useRef } from 'react'
import Viewer2 from './components/Viewer2';
import InputController from './components/InputController';
import Even from './components/Even';

function App() {
  const [count , setCount] = useState(0)
  const [number , setNumber] = useState(0)
  const [calculate, setCalculate] = useState(0);
  const isMount = useRef(false); 
  const countValue = useRef(0); 
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
  const onClickButton = ()=>{
    setCount(count + 1); 
  }
  const onClickNumber = ()=>{
    setNumber(number + 1); 
  }

  useEffect(()=>{
    console.log(`countValue = ${countValue.current}`)
    countValue.current = countValue.current + 1; 
    if(isMount.current === false){
      isMount.current = true;
    }else{
      console.log('App update')
    }
  })
  
  return (
    <>
    <div className="App">
      <div>
        <h1>계산기</h1>
      </div>
      <Viewer2 calculate={calculate}/>
      <InputController onClickCalculate={onClickCalculate} />
      {count % 2 === 0 ? <Even /> : null}
    </div>
    <div>
      <button type="button" onClick={onClickButton}>버튼</button>
      <button type="button" onClick={onClickNumber}>number</button>
    </div>
    </>
  )
}

export default App