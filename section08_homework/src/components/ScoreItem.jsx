import { useState } from 'react';
import '../css/ScoreItem.css';

const ScoreItem = ({ id, name, kor, eng, math, date, onDelete, onUpdate }) => {
  const [isEdit, setIsEdit] = useState(false);
  
  
  const [editData, setEditData] = useState({ 
    name: name, 
    kor: kor, 
    eng: eng, 
    math: math 
  });

  const total = kor + eng + math;
  const avg = (total / 3).toFixed(2);

  const onClickEdit = () => {
    if (isEdit) {
      // '완료' 클릭 시 이름과 점수 모두 부모에게 전달
      onUpdate(id, {
        name: editData.name,
        kor: Number(editData.kor),
        eng: Number(editData.eng),
        math: Number(editData.math),
      });
    }
    setIsEdit(!isEdit);
  };

  const onChangeEdit = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  return (
    <div className="ScoreItem">
      <div className="col_id">{id}</div>
      
      
      <div className="col_name">
        {isEdit ? (
          <input 
            className="edit_input_name" 
            name="name" 
            value={editData.name} 
            onChange={onChangeEdit} 
          />
        ) : (
          name
        )}
      </div>
      
      {isEdit ? (
        <>
          <input className="edit_input" name="kor" type="number" value={editData.kor} onChange={onChangeEdit} />
          <input className="edit_input" name="eng" type="number" value={editData.eng} onChange={onChangeEdit} />
          <input className="edit_input" name="math" type="number" value={editData.math} onChange={onChangeEdit} />
        </>
      ) : (
        <>
          <div className="col_score">{kor}</div>
          <div className="col_score">{eng}</div>
          <div className="col_score">{math}</div>
        </>
      )}

      <div className="col_total">{total}</div>
      <div className="col_avg">{avg}</div>
      <div className="col_date">{new Date(date).toLocaleDateString()}</div>
      
      <div className="col_btn">
        <button className="edit_btn" onClick={onClickEdit}>
          {isEdit ? "완료" : "수정"}
        </button>
        <button className="del_btn" onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
};

export default ScoreItem;