import { DataType } from "../redux/data-slice";

interface ItemListType {
  todoList: DataType[];
}

export default function ItemList(props: ItemListType) {
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
                <input className="ml-3" type="checkbox" />
                <span className="align-text-top text-xs ml-1">
                  {data.content}
                </span>
              </div>
              <div className="pr-3">
                <span>🗑️</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
