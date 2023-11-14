import Button from "./Button";

// Props들의 type은 자식페이지에서 세팅해준다.
interface HeaderDateType {
  dateData: Date;
  ChangeDate: (newDate: Date) => void;
}

//
const HeaderDate = (props: HeaderDateType) => {
  // 제목 Text 세팅
  const Text = `${props.dateData.getFullYear()}년 ${
    props.dateData.getMonth() + 1
  }월`;

  // 이전 달 버튼클릭 이벤트
  const BeforeClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newDate = new Date(
      props.dateData.getFullYear(),
      props.dateData.getMonth() - 1
    );
    props.ChangeDate(newDate);
  };

  // 다음 달 버튼클릭 이벤트
  const afterClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newDate = new Date(
      props.dateData.getFullYear(),
      props.dateData.getMonth() + 1
    );
    props.ChangeDate(newDate);
  };

  return (
    <div className="flex text-5xl font-bold">
      <div className="mr-8">
        <Button buttonText={"◀️"} clickEvent={BeforeClick} />
      </div>
      {Text}
      <div className="ml-8">
        <Button buttonText={"▶️"} clickEvent={afterClick} />
      </div>
    </div>
  );
};

export default HeaderDate;
