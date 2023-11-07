import { createSlice } from "@reduxjs/toolkit";

interface DataType {
  content: string;
  index: number;
  complete: boolean;
  date: number;
}

const initialState: DataType[] = [
  { content: "TEST4", index: 1, complete: true, date: 1695049200000 }, //2023-9-19
  { content: "TEST", index: 2, complete: false, date: 1697641200000 }, //2023-10-19
  { content: "TEST2", index: 3, complete: true, date: 1697727600000 }, //2023-10-20
];

const dataSlice = createSlice({
  name: "todoData",
  initialState: initialState,
  reducers: {},
});

export default dataSlice;
