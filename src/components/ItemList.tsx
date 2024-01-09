import { useDispatch } from "react-redux";
import { DataType, dataAction } from "../redux/data-slice";

interface ItemListType {
  todoList: DataType[];
}

export default function ItemList(props: ItemListType) {
  const dispatch = useDispatch();

  const changeCheck = (e: any) => {
    dispatch(dataAction.ChangeComplete(e.target.id));
  };

  const deleteTodo = (e: any) => {
    dispatch(dataAction.DeleteData(e.target.id));
  };

  return (
    <ul>
      {props.todoList.map((data) => {
        return (
          <li
            className="border-2 border-black/50 mb-0.5 rounded-md w-96"
            key={data.index}
          >
            <div className="flex justify-between">
              <div>
                <input
                  className="ml-3"
                  type="checkbox"
                  checked={data.complete}
                  onChange={changeCheck}
                  id={data.index.toString()}
                />
                <span
                  className={[
                    "align-text-top text-xs ml-1",
                    data.complete ? "line-through" : "",
                  ].join(" ")}
                >
                  {data.content}
                </span>
              </div>
              <div className="pr-3">
                <span
                  className="cursor-pointer"
                  id={data.index.toString()}
                  onClick={deleteTodo}
                >
                  🗑️
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
