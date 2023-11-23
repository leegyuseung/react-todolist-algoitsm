interface ButtonType {
  buttonText: string;
  clickEvent: React.MouseEventHandler<HTMLButtonElement>;
  buttonClass?: string;
}

export default function Button(props: ButtonType) {
  return (
    <button className={props.buttonClass} onClick={(e) => props.clickEvent(e)}>
      {props.buttonText}
    </button>
  );
}
