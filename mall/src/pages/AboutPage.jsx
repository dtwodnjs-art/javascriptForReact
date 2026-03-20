import Header from "../include/Header";
import useCustomLogin from "../hooks/useCustomLogin";
import "./AboutPage.css";

const AboutPage = () => {
  const { isLogin, moveToLoginReturn } = useCustomLogin();

  //로그인이 안되어있으면 로그인하도록 요청
  if (!isLogin) {
    alert("About 페이지는 회원만 볼수있습니다.");
    return moveToLoginReturn();
  }
  return (
    <>
      <div className="main-container">
        <Header />

        <main className="content-area">
          <div className="button-wrapper">
            <button type="button" className="custom-btn-outline">
              About Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
