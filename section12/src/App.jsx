import { Route, Routes,Link,useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Diary from './components/Diary'
import New from './components/New'
import Edit from './components/Edit'
import NotFound from './components/NotFound'
//import Header from './components/Header'

function App() {
  const nav = useNavigate();
  const onClickGoPage = (e)=>{
   nav(`/${e.target.value}`)

  }

  return (
    <>
    {/*여기에 적은내용은 모든페이지가 공동사용 */}
<h2><Link to={"/"}>Home</Link> || <Link to={"/new"}>NEW</Link> || <Link to={"/diary"}>Diary</Link> || <Link to={"/edit"}>Edit</Link>
    </h2>
    <h2><a href="/">Home</a> || <a href="/new">NEW</a> || <a href="/diray">Diary</a> || <a href="/edit">Edit</a></h2><br/>
    <button value ="" onClick={onClickGoPage} >Home</button>
    <button value ="new" onClick={onClickGoPage}>NEW</button>
    <button value ="diary" onClick={onClickGoPage}>Diary</button>
    <button value ="edit" onClick={onClickGoPage}>Edit</button>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/diary' element={<Diary/>}/>
      <Route path='/edit' element={<Edit/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    
    </>
  )
}

export default App