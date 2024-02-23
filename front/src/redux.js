import { createAsyncThunk, configureStore, createSlice } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tasks`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const data = await response.json();
  return data;
});
export const addTaskAsync = createAsyncThunk("tasks/addTask", async (taskText) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: taskText }),
  });
  if (!response.ok) {
    throw new Error("Failed to add task");
  }
  const data = await response.json();
  return data;
});

export const endTaskAsync = createAsyncThunk("tasks/endTask", async (taskId) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/task/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to end task");
  }
  return { id: taskId };
});

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

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
