import "./App.css";
import Modal from "./Modal";
import { useState } from "react";
function App() {
  let [title, setTitle] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  const [like, upLike] = useState(0);
  const [좋아요, 좋아요함수] = useState(0);
  const up = () => {
    upLike((prev) => prev + 1);
  };
  const likeIt = () => {
    좋아요함수((좋아요) => 좋아요 + 1);
  };

  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h1>애플</h1>
      </div>
      <button
        className="sort"
        onClick={() => {
          let titleChange = [...title]; //스프레드문법(배열복사)
          setTitle(titleChange.sort()); //가나다순 정렬
        }}
      >
        제목 정렬
      </button>
      <div className="list">
        <h4
          onClick={() => {
            //h4를 클릭 했을 때 모달 show
            setModal(!modal); //false값 반전
          }}
        >
          {title[0]} <span>👍</span>
          <button onClick={up}>{like}</button>
          <br />
          <button
            onClick={() => {
              let copy = [...title];
              copy[0] = "여자 코트 추천";
              setTitle(copy);
            }}
          >
            제목 바꾸기!
          </button>
        </h4>

        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[1]}
          <span onClick={likeIt}>👍</span>
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title[2]}
          <span
            onClick={() => {
              좋아요함수(좋아요 + 1);
            }}
          >
            👍
          </span>
          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      {modal === true ? <Modal /> : null}
      {/* 모달 show & hide */}
    </div>
  );
}

export default App;
