import './App.css'

const mockData =[
  {id: 1,name:"유재원",kor:90,eng:88,math:70,date: new Date().getTime()},
  {id: 1,name:"피곤해",kor:98,eng:82,math:72,date: new Date().getTime()},

]




function App() {
  // 2. 상태(State)로 만들기: 이 데이터가 바뀌면 화면이 리렌더링
  const [scores,setScores] = useState(mockData);
  const idRef = useRef(3);


  return (
    <>
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List scores={scores} onDelete={onDelete} />
    </div>
      
    </>
  );
}

export default App