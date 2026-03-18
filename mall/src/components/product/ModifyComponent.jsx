import { useEffect, useRef, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/productsApi";
import { API_SERVER_HOST } from "../../api/todoApi";
import InfoModal from "../common/InfoModal";
import "./ModifyComponent.css";

import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";

const initState = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
  delFlag: false,
  uploadFileNames: [],
};
const host = API_SERVER_HOST;

const ModifyComponent = ({ pno }) => {
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false);

  /* 수정: useCustomMove는 함수이므로 호출()이 필요합니다 */
  const { moveToProductList, moveToProductRead } = useCustomMove();

  /* 수정: useState는 [값, 함수] 형태의 배열(Array)을 반환하므로 []를 사용해야 합니다 */
  const [result, setResult] = useState(null);

  /* 수정: useState() 함수를 호출하고 초기값(false)을 할당해야 합니다 */
  const [infoModalOn, setInfoModalOn] = useState(false);

  const uploadRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setFetching(true), 0);
    getOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
    return () => clearTimeout(timer);
  }, [pno]);

  const handleChangeProduct = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const deleteOldImages = (imageName) => {
    const resultNames = product.uploadFileNames.filter(
      (name) => name !== imageName,
    );
    setProduct({ ...product, uploadFileNames: resultNames });
  };

  const handleClickModify = () => {
    //서버에 보낼 form 생성
    const formData = new FormData();
    //자료 업로드 위치
    const files = uploadRef.current.files;
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    formData.append("delFlag", product.delFlag);

    //이미지파일명 추가
    for (let i = 0; i < product.uploadFileNames.length; i++) {
      formData.append("uploadFileNames", product.uploadFileNames[i]);
    }
    setFetching(true);
    //수정 처리
    putOne(pno, formData).then((data) => {
      setResult(`Modified`);
      setFetching(false);
      setInfoModalOn(true);
    });

    /* putOne 로직 구현 */
  };

  const handleClickDelete = () => {
    /* deleteOne 로직 구현 */
    setFetching(true);

    /* 수정: .then 뒤에는 소괄호()를 사용해 화살표 함수를 작성해야 합니다 */
    deleteOne(pno).then((data) => {
      setResult(`Deleted`);
      setFetching(false);
      setInfoModalOn(true);
    });
  };

  const closeModal = () => {
    if (result === "Modified") {
      moveToProductRead(pno); // 조회 화면으로 이동
    } else if (result === "Deleted") {
      moveToProductList({ page: 1 });
    }
    setInfoModalOn(false);
    setResult(null);
  };

  return (
    <div className="modify-container">
      {fetching && <FetchingModal />}
      <InfoModal
        show={infoModalOn}
        title={`RESULT`}
        content={`${result}`}
        callbackFn={closeModal}
      />

      <div className="modify-form">
        <div className="modify-form-group">
          <label className="modify-label">PNAME</label>
          <input
            className="modify-control"
            name="pname"
            type="text"
            value={product.pname}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">PRICE</label>
          <input
            className="modify-control"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">DESCRIPTION</label>
          <textarea
            className="modify-control"
            name="pdesc"
            rows={5}
            value={product.pdesc}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">DELETE (Flag)</label>
          <select
            className="modify-select"
            name="delFlag"
            value={product.delFlag}
            onChange={handleChangeProduct}
          >
            <option value={false}>사용 (Keep)</option>
            <option value={true}>삭제 (Delete)</option>
          </select>
        </div>

        <div className="modify-form-group">
          <label className="modify-label">New Files</label>
          <input
            className="modify-control"
            ref={uploadRef}
            type="file"
            multiple={true}
          />
        </div>
      </div>

      {/* 기존 이미지 목록 */}
      <div className="modify-image-grid">
        {product.uploadFileNames.map((imgFile, i) => (
          <div className="modify-image-card" key={i}>
            <button
              className="btn-img-delete"
              type="button"
              onClick={() => deleteOldImages(imgFile)}
            >
              DELETE
            </button>
            <img alt="product" src={`${host}/api/products/view/s_${imgFile}`} />
          </div>
        ))}
      </div>

      <div className="modify-button-group">
        <button
          className="btn-modify-action btn-del"
          type="button"
          onClick={handleClickDelete}
        >
          DELETE
        </button>
        <button
          className="btn-modify-action btn-mod"
          type="button"
          onClick={handleClickModify}
        >
          MODIFY
        </button>
        <button
          className="btn-modify-action btn-list"
          type="button"
          onClick={moveToProductList}
        >
          LIST
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
