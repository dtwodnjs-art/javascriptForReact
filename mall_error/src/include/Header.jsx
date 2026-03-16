import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isTodoOpen, setIsTodoOpen] = useState(false);
  const [isProductOpen, setIsProductDropdwonOpen] = useState(false);

  // 1. Ref를 각각 만들어줘야 함 (정의 필수!)
  const todoRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // 2. TODO 드롭다운 외부 클릭 시 닫기
      if (todoRef.current && !todoRef.current.contains(e.target)) {
        setIsTodoOpen(false);
      }
      // 3. PRODUCT 드롭다운 외부 클릭 시 닫기
      if (productRef.current && !productRef.current.contains(e.target)) {
        setIsProductDropdwonOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick, true);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick, true);
    };
  }, []);

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-link">
            MAIN
          </Link>
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>

          {/* TODO 드롭다운 */}
          <div className="nav-dropdown" ref={todoRef}>
            <button
              className="dropdown-toggle"
              onClick={() => setIsTodoOpen(!isTodoOpen)}
            >
              TODO <span className="arrow">▾</span>
            </button>
            {isTodoOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/todo/list">LIST</Link>
                </li>
                <li>
                  <Link to="/todo/read/20">READ</Link>
                </li>
                <li>
                  <Link to="/todo/add">ADD</Link>
                </li>
                <li>
                  <Link to="/todo/modify">MODIFY</Link>
                </li>
              </ul>
            )}
          </div>

          {/* PRODUCT 드롭다운 */}
          <div className="nav-dropdown" ref={productRef}>
            <button
              className="dropdown-toggle"
              onClick={() => setIsProductDropdwonOpen(!isProductOpen)}
            >
              PRODUCT <span className="arrow">▾</span>
            </button>
            {isProductOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/product/list">LIST</Link>
                </li>
                <li>
                  <Link to="/product/read/20">READ</Link>
                </li>
                <li>
                  <Link to="/product/add">ADD</Link>
                </li>
                <li>
                  <Link to="/product/modify">MODIFY</Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="nav-right">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
