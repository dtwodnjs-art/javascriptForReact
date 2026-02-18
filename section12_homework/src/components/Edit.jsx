
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext, DiaryDispatchContext } from "../App";
import Header from "./Header";
import Button from "./Button";
import Editor from "./Editor";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
  // 이미 아이템을 찾았다면(삭제 후 리렌더링 시) 다시 찾지 않음
  if (curDiaryItem) return; 

  const currentDiaryItem = data.find(
    (item) => String(item.id) === String(params.id)
  );

  if (currentDiaryItem) {
    setCurDiaryItem(currentDiaryItem);
  } else {
   
    if(data.length > 0) {
       alert("존재하지 않는 일기입니다.");
       nav("/", { replace: true });
    }
  }
}, [params.id, data]);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(params.id, input.createdDate, input.emotionId, input.content);
      nav("/", { replace: true });
    }
  };

  if (!curDiaryItem) return <div>로딩 중...</div>;

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;