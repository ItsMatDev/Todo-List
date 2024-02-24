import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./tasks/reducers";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
