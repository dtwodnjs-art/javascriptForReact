import '../css/Header.css';

const Header = () => {
  
  const dateString = new Date().toLocaleDateString();

  return (
    <div className="Header">
      <h3>성적 관리 시스템 📝</h3>
      <h1>{dateString}</h1>
    </div>
  );
};

export default Header;