import { Link } from "react-router-dom";
import Header from "../include/Header";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-container">
      <Header />
      <Link to={"/todo/list?page=3&size=20"}>List PAGE</Link> <br />
      <a href="/about">A ABOUT PAGE</a>
      <main className="content-area">
        <div className="button-wrapper">
          <button className="custom-btn-outline" type="button">
            Main Page
          </button>
        </div>
      </main>
    </div>
  );
};
export default MainPage;
