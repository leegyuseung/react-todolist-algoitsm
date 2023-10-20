import { useEffect, useState } from "react";
import HeaderDate from "../components/HeaderDate";

interface DataType {
  content: string;
  index: number;
  complete: boolean;
  date: number;
}

const testData: DataType[] = [
  { content: "TEST4", index: 1, complete: true, date: 1695049200000 }, //2023-9-19
  { content: "TEST", index: 2, complete: false, date: 1697641200000 }, //2023-10-19
  { content: "TEST2", index: 3, complete: true, date: 1697727600000 }, //2023-10-20
];

export default function Home() {
  const [dateData, setDateData] = useState(new Date()); // 날짜데이터 상태
  const [todoList, setTodoList] = useState(testData); // 투두리스트데이터 상태

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
    const newData = testData.filter(
      (data) => firstDay <= data.date && data.date <= lastDay
    );

    // 새로운 데이터로 세팅
    setTodoList(newData);
  }, [dateData]);

  return (
    <div className="">
      <div className="">
        <HeaderDate dateData={dateData} ChangeDate={ChangeDate} />
        {testData && (
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
