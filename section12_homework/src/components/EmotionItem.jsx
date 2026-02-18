import React from "react";
import "../css/EmotionItem.css";

const EmotionItem = ({ emotionId, emotionName, img, onClick, isSelected }) => {
  return (
    <div
      onClick={() => onClick(emotionId)}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img src={img} alt={emotionName} />
      <div>{emotionName}</div>
    </div>
  );
};

export default EmotionItem;