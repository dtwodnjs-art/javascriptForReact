import './App.css'
import Editor from './components/Editor'
import Exam from './components/Exam'
import Header from './components/Header'
import List from './components/List'
import './css/App.css'
import { useReducer, useState } from 'react'
import { useRef } from 'react'

//전역변수
const mockData = [ 
  { 
    id: 0, 
    isDone: false, 
    content: "React 공부하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 1, 
    isDone: false, 
    content: "스프링부트공부하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 2, 
    isDone: false, 
    content: "자바공부하기", 
    date: new Date().getTime(), 
  }, 
]; 

function reducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return[action.data,...todos];
    case "DELETE":
      return todos.filter((todo) =>todo.id !== action.id)
    case "UPDATE":
      return todos.map((todo)=>{
        return todo.id === action.id? {...todo, isDone: !todo.isDone}: todo
      })
  
    default:
      return todos;
  }
  
}

function App() {
  //const [todos, setTodos] = useState(mockData)
  const[todos, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(3);
  //이벤트함수(setTodos 생성 핸들러함수)
  const onCreate = (content) =>{
    let newTodo =  
    { 
    id: idRef.current++, 
    isDone: false, 
    content: content, 
    date: new Date().getTime(), 
  }
    dispatch({type: "INSERT" ,data: newTodo})
  }
  //이벤트함수(setTodos 데이타 수정)
  const onUpdate = (id) =>{
    dispatch({type: "UPDATE", id: id})
  }
  //이벤트함수(setTodos 삭제)
  const onDelete = (id) =>{
    dispatch({type: "DELETE", id: id})
  }
  return (
    <>
    <div className="App">
      <Header/>
      <Exam/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>
    </>
  )
}

export default App;
