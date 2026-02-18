
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import { getEmotionImage } from "../util/getEmotionImage";
import Header from "../components/Header";
import Button from "../components/Button";
import "../css/Diary.css";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (currentDiaryItem) {
      setCurDiaryItem(currentDiaryItem);
    } else {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
  }, [params.id, data]);

  if (!curDiaryItem) {
    return <div className="DiaryPage">데이터를 불러오는 중입니다...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = `${getStringDate(new Date(createdDate))} 기록`;

  return (
    <div className="DiaryPage">
      <Header
        title={title}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <article>
        <section className="img_section">
          <h4>오늘의 감정</h4>
          <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
            <img src={getEmotionImage(emotionId)} />
            <div>{/* 감정 이름이 필요하다면 여기에 추가 */}</div>
          </div>
        </section>
        <section className="content_section">
          <h4>오늘의 일기</h4>
          <div className="content_wrapper">
            <p>{content}</p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Diary;