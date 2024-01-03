import Button from "./Button";

export default function Modal() {
  const ButtonClick = () => {};

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex h-full w-full border-2 justify-center items-center ">
      <div className="relative bg-white rounded-lg shadow-2xl ">
        <div>
          <input
            name="content"
            id="content"
            type="text"
            className="border-2 border-black outline-none rounded-md shadow-xl w-64"
          />
          <Button
            buttonClass="text-base ml-2 border-2 border-black rounded-md"
            buttonText="추가"
            clickEvent={ButtonClick}
          />
        </div>
      </div>
    </div>
  );
}
