import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { DataType, dataAction } from "../redux/data-slice";

interface ModalType {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  todoData: DataType[];
}

export default function Modal(props: ModalType) {
  const dispatch = useDispatch();

  const [Text, setText] = useState("");
  // 추가버튼 이벤트
  const ButtonAddClick = () => {
    let lastIndex = 1;
    if (props.todoData.length > 0) {
      lastIndex = props.todoData[props.todoData.length - 1]["index"] + 1;
    }

    if (Text === "") {
      alert("할 일을 작성해 주세요");
      return;
    } else {
      dispatch(
        dataAction.CreateData({
          content: Text,
          index: lastIndex,
          complete: false,
          date: new Date().getTime(),
        })
      );
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
