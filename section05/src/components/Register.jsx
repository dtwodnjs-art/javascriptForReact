import { useState } from "react";
// 회원가입폼
//1.이름,2.생년월일,3.국적,4.자기소개

const Register = () =>{
  const [input,setInput] = useState({
    name:'이름입력',
    birth:'',
    national:'',
    bio:''
  })

  const onChange = (e) =>{
    setInput({
     ...input,
     [e.target.name]:e.target.value


    }

    );
  }

  

  return <>
  <div>
    <label htmlFor="name">성명</label>
  <input value={input.name} type="text" name="name" id="name" />
  </div>
  <div>
    <label htmlFor="birth">생년월일</label>
  <input value={input.birth} name="birth" id="birth" />
  </div>
  <div>
    <label htmlFor="nation">국적</label>
  <select value={input.national} id="nation" >
    <option value=""></option>
    <option value="kr">한국</option>
    <option value="us">미국</option>
    <option value="jp">일본</option>
  </select>
  </div>
  <div>
    <label htmlFor="bio">자기소개</label>
  <textarea value={input.bio} id="bio" cols="30" rows="10" ></textarea>
  </div>
  
  
  </>
}

export default Register;