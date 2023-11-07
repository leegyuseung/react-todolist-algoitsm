import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import HeaderDate from "../components/HeaderDate";

export default function Home() {
  const todoData = useSelector((state: RootState) => state.data);
  const [dateData, setDateData] = useState(new Date()); // 날짜데이터 상태
  const [todoList, setTodoList] = useState(todoData); // 투두리스트데이터 상태

  // 월을 바꾸면 실행되는 함수
  const ChangeDate = (newDate: Date) => {
    setDateData(newDate);
  };

  useEffect(() => {
    // 이번달 첫날
    const firstDay = new Date(
      dateData.getFullYear(),
      dateData.getMonth(),
      1
    ).getTime();

    // 이번달 마지막날
    const lastDay = new Date(
      dateData.getFullYear(),
      dateData.getMonth() + 1,
      0
    ).getTime();

    // 이번달 데이터 filter
    const newData = todoData.filter(
      (data) => firstDay <= data.date && data.date <= lastDay
    );

    // 새로운 데이터로 세팅
    setTodoList(newData);
  }, [dateData, todoData]);

  return (
    <div className="">
      <div className="">
        <HeaderDate dateData={dateData} ChangeDate={ChangeDate} />
        {todoData && (
          <ul>
            {todoList.map((data) => {
              return <li key={data.index}>{data.content}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
