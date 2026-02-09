import './App.css'
import { useState } from 'react'
import Viewer from './components/Viewer';
import Controller from './components/Controller';

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (e)=>{
    setCount(count + parseInt(e.target.value))
  }; 
  console.log(`App 리랜더링 ${count}`); 
  return (
    <>
    <div className="App">
      {/* 제목 */}
      <h1>카운터앱</h1>
      {/* 카운터뷰 */}
      <Viewer count={count}/>
      {/* 카운터이베트버튼 */}
      <Controller onClickButton={onClickButton}/>
    </div>
    
    </>
  )
}

export default App