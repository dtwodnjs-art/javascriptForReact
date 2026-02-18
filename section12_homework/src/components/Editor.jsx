import "./Editor.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants"; 
import { getStringDate } from "../util/date";


// 이미지 import
import emotion1 from "../assets/emotion1.jpg";
import emotion2 from "../assets/emotion2.jpg";
import emotion3 from "../assets/emotion3.jpg";
import emotion4 from "../assets/emotion4.jpg";
import emotion5 from "../assets/emotion5.jpg";

const getEmotionImage = (emotionId) => {
  switch (emotionId) {
    case 1: return emotion1;
    case 2: return emotion2;
    case 3: return emotion3;
    case 4: return emotion4;
    case 5: return emotion5;
    default: return null;
  }
};

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  // 수정 페이지일 경우 기존 데이터를 불러오는 로직
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickEmotionId = (id) => {
    setInput({
      ...input,
      emotionId: id,
    });
  };

  const onSubmitInput = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input 
          name="createdDate"
          type="date" 
          value={getStringDate(input.createdDate)} 
          onChange={onChangeInput} 
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem 
              key={item.emotionId} 
              {...item} 
              img={getEmotionImage(item.emotionId)}
              onClick={onClickEmotionId}
              isSelected={Number(item.emotionId) === Number(input.emotionId)} 
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea 
          name="content"
          placeholder="오늘은 어땠나요?" 
          value={input.content} 
          onChange={onChangeInput} 
        />
      </section>

      <section className="button_section">
        <Button text="취소하기" onClick={() => nav(-1)} />
        <Button text="작성완료" type="POSITIVE" onClick={onSubmitInput} />
      </section>
    </div>
  );
};

export default Editor;