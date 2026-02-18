import React, { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// 페이지 컴포넌트
import Home from "./components/Home";
import New from "./components/New";
import Diary from "./components/Diary";
import Edit from "./components/Edit";
import Notfound from "./components/Notfound";

// [예시 데이터] 롤 감정표현 아이콘에 맞춰 구성
const mockData = [
  {
    id: 1,
    createdDate: new Date("2026-02-18").getTime(), 
    emotionId: 1, 
    content: "개꿀",
  },
  {
    id: 2,
    createdDate: new Date("2026-02-17").getTime(), 
    emotionId: 5, 
    content: "킹받네",
  },
];

// 리듀서 함수: 상태 관리 로직
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

// Context 생성
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // 초기값으로 mockData를 사용함
  const [data, dispatch] = useReducer(reducer, mockData);
  
  // 예시 데이터가 1, 2번을 쓰므로 다음 ID는 3번부터 시작
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <div className="App">
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;