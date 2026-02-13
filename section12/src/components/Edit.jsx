import { useState, useContext, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import Editor from "./Editor";
import {DiaryStateContext, DiaryDispatchContext} from "../App"

const Edit = ()=>{
    const params = useParams();
    const nav = useNavigate();
    const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
    const data = useContext(DiaryStateContext);
    const [currentDiaryItem, setCurDiaryItem] = useState();

// useState와 useEffect를 제거하고 useMemo로 대체
  const curDiaryItem = useMemo(() => {
    return data.find((item) => String(item.id) === String(params.id));
  }, [data, params.id]); // data나 id가 바뀔 때만 다시 계산

// 데이터 확인 및 리다이렉트 로직
/*useEffect(() => {
  if ( !curDiaryItem) {
    window.alert("존재하지 않는 일기입니다.");
    nav("/", { replace: true });
  }
}, [data, curDiaryItem, nav]);*/

// 데이터가 로드될 때까지 렌더링 방어
if (!curDiaryItem) {
  return <div>데이터를 불러오는 중입니다...</div>;
}
const onClickDelete = () => {
  if(window.confirm("일기를 정말 삭제하실까요?")){
    onDelete(Number(params.id))
    nav("/", {replace:true})
  }
}

//수정하기
const onSubmit = (input) =>{
  if(window.confirm("일기를 정말 수정하실까요")){
    onUpdate(Number(params.id), input.createdDate.getTime(),input.emotionId, input.content);
    nav("/",{replace: true})
  }
}
  return <>
    <div>
      <Header title={'일기수정하기'} 
      leftChild={<Button text={"뒤로가기"} onClick={()=>nav(-1)}/>}
      rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete}/>}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
  </>
}
export default Edit;

