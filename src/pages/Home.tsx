import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import HeaderDate from "../components/HeaderDate";
import Button from "../components/Button";

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
    <div className="flex flex-col justify-items-center items-center mt-20">
      <div>
        <HeaderDate dateData={dateData} ChangeDate={ChangeDate} />
      </div>
      <div className="w-96 pt-8 flex flex-row items-center justify-around">
        <div></div>
        <div>
          <span className="text-2xl">- 리스트 -</span>
        </div>
        <div>
          <Button buttonClass="text-2xl" buttonText="+" clickEvent={() => {}} />
        </div>
      </div>
      <div className="mt-4">
        {todoList && (
          <ul>
            {todoList.map((data) => {
              return (
                <li
                  className="border-2 border-black/50 mb-0.5 rounded-md w-96"
                  key={data.index}
                >
                  <span className="text-xs ml-1">{data.content}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
