 import { Children } from "react";
import "../css/Sub.css"
 
 const Button = ({text,color="black"},Children)=>{
//이벤트처리기능 핸들러함수(3가지:함수선언,함수표현,화살표함수)
const onClickButton = (e) => {
  alert (`${text} +${color}`)
  //매우중요
  console.log(e);
}


  return <>
  <button onClick={onClickButton} style={{color:color}}type="button">{text} -{color.toUpperCase()}{Children}</button>
  
  </>
  
  
};

export default  Button;

