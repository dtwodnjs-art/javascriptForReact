
import { useState } from 'react';
import ScoreItem from './ScoreItem';
import '../css/List.css';

const List = ({ scores, onDelete, onUpdate }) => {
  const [search, setSearch] = useState("");

  const filteredData = scores.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="List">
      <h4>학생 성적 목록</h4>
      <input 
        className="search_bar"
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="학생 이름을 검색하세요" 
      />
      <div className="list_header">
        <span>번호</span><span>이름</span><span>국어</span><span>영어</span><span>수학</span>
        <span>총점</span><span>평균</span><span>등록일</span><span>관리</span>
      </div>
      {filteredData.map((item) => (
        //전달
        <ScoreItem key={item.id} {...item} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};
export default List;