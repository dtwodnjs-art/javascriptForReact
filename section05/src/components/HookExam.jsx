import {useState} from  'react';

function useInput (){
  const [input,setInput] = useState("");
  const onchange = (e)=>{
    setInput(e.target.value);
  }

  return [input, onchange];

}


const HookExam = () => {
  const [input,onchange] = useInput();
  const [input2,onchange2] = useInput();

  return (<div>
    <input type="text" value={input} onChange={onchange} />
    <input type="text" value={input2} onChange={onchange2} />


  </div>);

};

export default HookExam;