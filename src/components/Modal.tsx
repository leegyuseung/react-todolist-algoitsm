import { useState } from "react";
import Button from "./Button";

interface ModalType {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal(props: ModalType) {
  const [Text, setText] = useState("");
  // 추가버튼 이벤트
  const ButtonAddClick = () => {
    if (Text === "") {
      alert("할 일을 작성해 주세요");
      return;
    }
    props.setModalOpen(false);
  };

  // 닫기버튼 이벤트
  const ButtonCloseClick = () => {
    props.setModalOpen(false);
  };

  return (
    <div id="modal" className="relative bg-white rounded-lg shadow-2xl ">
      <div>
        <input
          name="content"
          id="content"
          type="text"
          className="border-2 border-black outline-none rounded-md shadow-xl w-64"
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          buttonClass="text-base ml-2 border-2 border-black rounded-md"
          buttonText="추가"
          clickEvent={ButtonAddClick}
        />
        <Button
          buttonClass="text-base ml-2 border-2 border-black rounded-md"
          buttonText="닫기"
          clickEvent={ButtonCloseClick}
        />
      </div>
    </div>
  );
}
