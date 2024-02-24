import { createSlice } from "@reduxjs/toolkit";
import { addTaskAsync, endTaskAsync, fetchTasks } from "./thunks";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.loading = false;

        state.tasks.push(action.payload);
      })
      .addCase(endTaskAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      });
  },
});

export const todoReducer = todoSlice.reducer;
