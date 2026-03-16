import Header from "../../include/Header";
import ReadComponent from "../../components/product/ReadComponent";
import { useParams } from "react-router-dom";
import "./ReadPage.css";

const ReadPage = () => {
  const { pno } = useParams();

  // 수정 페이지로 이동하는 함수
  return (
    <div className="list-page-container">
      <Header />

      <main className="list-content-area">
        <div className="list-wrapper">
          <ReadComponent pno={pno} />
        </div>
      </main>
    </div>
  );
};

export default ReadPage;
