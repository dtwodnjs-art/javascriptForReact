
import { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import './css/App.css';

const mockData = [
  { id: 1, name: "유재원", kor: 90, eng: 80, math: 70, date: new Date().getTime() },
  { id: 2, name: "yjw", kor: 100, eng: 95, math: 90, date: new Date().getTime() },
];

function App() {
  const [scores, setScores] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (name, kor, eng, math) => {
    const newScore = {
      id: idRef.current++,
      name,
      kor: Number(kor),
      eng: Number(eng),
      math: Number(math),
      date: new Date().getTime(),
    };
    setScores([newScore, ...scores]);
  };

  // 수정 함수: id가 일치하는 데이터만 updatedData로 교체
  const onUpdate = (id, updatedData) => {
    setScores(scores.map((item) => 
      item.id === id ? { ...item, ...updatedData } : item
    ));
  };

  const onDelete = (id) => {
    setScores(scores.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      {/* onUpdate 함수를 List에 전달합니다 */}
      <List scores={scores} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;