import "./App.css";
import Modal from "./Modal";
import { useRef, useState } from "react";
function App() {
  let [title, setTitle] = useState(["html 공부", "css 공부", "리액트 독학"]);
  const [좋아요, 좋아요함수] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(0);
  let [inputs, setInputs] = useState("");
  const titleInput = useRef();
  const onReset = () => {
    setInputs("");
  };
  const time = new Date();

  return (
    <div className="App">
      <div className="black-nav">
        <h1>할 일</h1>
      </div>

      {title.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...좋아요];
                  copy[i] += 1;
                  좋아요함수(copy);
                }}
              >
                👍
              </span>
              {좋아요[i]}
            </h4>
            <p>{time.toDateString()}</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      {modal === true ? <Modal modalTitle={modalTitle} title={title} color="#ddd" /> : null}
      {/* 모달 show & hide */}
      <input
        placeholder="할 일 적기"
        ref={titleInput}
        value={inputs}
        type="text"
        onChange={(e) => {
          setInputs(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          if (inputs === "") {
            // 기본 이벤트 Prevent
            e.preventDefault();
            alert("글을 입력해주세요");
            return; // onClick function 밖으로 나가기
          }
          let copy = [...title];
          copy.unshift(inputs);
          setTitle(copy);
          onReset();
          titleInput.current.focus();
        }}
      >
        글발행
      </button>
    </div>
  );
}

export default App;
