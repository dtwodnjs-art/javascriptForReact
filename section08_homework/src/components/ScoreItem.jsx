import '../css/ScoreItem.css';

const ScoreItem = ({ id, name, kor, eng, math, date, onDelete }) => {
  const total = kor + eng + math; // 총점 계산
  const avg = (total / 3).toFixed(1); // 평균 계산 소수점 1자리까지

  return (
    <div className="ScoreItem">
      <div className="col_id">{id}</div>
      <div className="col_name">{name}</div>
      <div className="col_score">{kor}</div>
      <div className="col_score">{eng}</div>
      <div className="col_score">{math}</div>
      <div className="col_total">{total}</div>
      <div className="col_avg">{avg}</div>
      <div className="col_date">{new Date(date).toLocaleDateString()}</div>
      <div className="col_btn">
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </div>
  );
};
export default ScoreItem;