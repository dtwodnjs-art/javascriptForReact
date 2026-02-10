import { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import './css/App.css';

//임시데이터
const mockData = [
  {
    id: 1,
    name: "유재원",
    kor: 90,
    eng: 80,
    math: 70,
    date: new Date().getTime(),
  },
  {
    id: 2,
    name: "yjw",
    kor: 100,
    eng: 95,
    math: 90,
    date: new Date().getTime(),
  },
];

function App() {
  // 추가하려는 값 생성
  const [scores, setScores] = useState(mockData);
 //3번부터
  const idRef = useRef(3);

  // 새로운 성적 데이터를 추가하는 함수
 
  const onCreate = (name, kor, eng, math) => {
    const newScore = {
      id: idRef.current++, // 현재 번호 만들고  1 증가
      name,
      kor: Number(kor), 
      eng: Number(eng),
      math: Number(math),
      date: new Date().getTime(),
    };
    
    //불변성 때문에 새로운거 업데이트 
    setScores([newScore, ...scores]);
  };

  // 데이터를 삭제하는 함수
  // id는 뺴고
  const onDelete = (id) => {
    setScores(scores.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      {/* 제목과 날짜를 보여주는 위쪽 영역  */}
      <Header />
      
      {/* 성적을 입력받는 영역  */}
      <Editor onCreate={onCreate} />
      
      {/* 목록을 보여주는 영역 (데이터 배열과 삭제 함수 전달) */}
      <List scores={scores} onDelete={onDelete} />
    </div>
  );
}

export default App;