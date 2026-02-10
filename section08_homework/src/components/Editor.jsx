import { useState, useRef } from 'react';
import '../css/Editor.css';

const Editor = ({ onCreate }) => {
  const [state, setState] = useState({ name: "", kor: "", eng: "", math: "" });
  const nameRef = useRef();

  const onChangeInput = (e) => {
    // name 속성을 이용해 한 번에 상태 변경
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (state.name === "") {
      nameRef.current.focus();
      return;
    }
    onCreate(state.name, state.kor, state.eng, state.math);
    setState({ name: "", kor: "", eng: "", math: "" }); // 입력창 초기화
  };

  return (
    <div className="Editor">
      <h4>학생 성적 등록</h4>
      <div className="editor_form">
        <input ref={nameRef} name="name" value={state.name} onChange={onChangeInput} placeholder="이름" />
        <input name="kor" type="number" value={state.kor} onChange={onChangeInput} placeholder="국어" />
        <input name="eng" type="number" value={state.eng} onChange={onChangeInput} placeholder="영어" />
        <input name="math" type="number" value={state.math} onChange={onChangeInput} placeholder="수학" />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default Editor;