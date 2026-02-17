import "./App.css"; 
import { Routes, Route } from "react-router-dom"; 
import Home from "./components/Home"; 
import Diary from "./components/Diary"; 
import New from "./components/New"; 
import Edit from "./components/Edit"; 
import Notfound from "./components/NotFound"; 
   


function App() { 
  return ( 
    <> 
      <div>Hello</div> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/new" element={<New />} /> 
        <Route path="/diary" element={<Diary />} /> 
        <Route path="/edit" element={<Edit />} /> 
        <Route path="*" element={<Notfound />} /> 
      </Routes> 
    </> 
  ); 
} 
 
export default App; 