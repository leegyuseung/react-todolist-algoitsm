interface ButtonType {
  buttonText: string;
  clickEvent: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonType) {
  return (
    <button className="" onClick={(e) => props.clickEvent(e)}>
      {props.buttonText}
    </button>
  );
}
