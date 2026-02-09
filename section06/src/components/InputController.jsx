import { useState, onClickCalculate } from "react";

const InputController = ({onClickCalculate})=>{
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const onChangeNum = (e)=>{
    switch (e.target.name) {
      case "num1":
         setNum1(e.target.value)
        break;
      case "num2":
         setNum2(e.target.value)
        break;
    }
  }
  const onClickButton= (e)=>{
    onClickCalculate(num1, num2, e.target.value)
  }

  return <>
   <div className="input_controller">
        <label htmlFor="num1" >숫자1</label>
        <input type="number" name="num1" id="num1" value={num1} onChange={onChangeNum}/> <br />
        <label htmlFor="num2">숫자2</label>
        <input type="number" name="num2" id="num2" value={num2} onChange={onChangeNum}/> <br /> <br />

        <button type="button" value={"+"} onClick={onClickButton}>+</button>
        <button type="button" value={"-"} onClick={onClickButton}>-</button>
        <button type="button" value={"/"} onClick={onClickButton}>/</button>
        <button type="button" value={"*"}  onClick={onClickButton}>*</button>
    </div>
  </>
}

export default InputController; 