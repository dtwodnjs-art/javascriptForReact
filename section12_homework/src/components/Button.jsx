import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button 
      className={`Button Button_${type}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: "DEFAULT",
};

export default Button;