import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import New from './components/New'
import Diary from './components/Diary'
import Edit from './components/Edit'
import NotFound from './components/NotFound'

function App() {
 const nav = useNavigate();
  const onClickGoPage = (e) =>{
    nav(`/${e.target.value}`)
  }


  return (
    <>
    {/* 여기에 적은 내용은 모든페이지가 공통사용*/}
    <h2><Link to={"/"}>Home</Link><Link to={"/new"}>New</Link><Link to={"/diary"}>Diary</Link><Link to={"/edit"}>Edit</Link></h2>

    <h2><a href="/">Home</a>||<a href="/new">new</a>||<a href="/diary">diary</a>||<a href="/edit">edit</a></h2>
    <button value='' onClick={onClickGoPage}>Home</button>
    <button value='New' onClick={onClickGoPage}>New</button>
    <button value='Diary' onClick={onClickGoPage}>Diary</button>
    <button value='Edit' onClick={onClickGoPage}>Edit</button>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/New/' element={<New/>}/>
      <Route path='/Diary/' element={<Diary/>}/>
      <Route path='/Edit/' element={<Edit/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
