import { createSlice } from "@reduxjs/toolkit";

export interface DataType {
  content: string;
  index: number;
  complete: boolean;
  date: number;
}

const initialState: DataType[] = [
  { content: "라면먹기", index: 1, complete: true, date: 1695049200000 }, //2023-9-19
  { content: "잠자기", index: 2, complete: false, date: 1697641200000 }, //2023-10-19
  { content: "놀기", index: 3, complete: true, date: 1697727600000 }, //2023-10-20
];

const dataSlice = createSlice({
  name: "todoData",
  initialState: initialState,
  reducers: {
    CreateData: (state, action) => {
      state.push(action.payload);
    },
    ChangeComplete: (state, action) => {
      state.map(
        (obj) =>
          (obj.complete =
            obj.index.toString() === action.payload.toString()
              ? !obj.complete
              : obj.complete)
      );
      return state;
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const dataAction = dataSlice.actions;
