import { createAsyncThunk } from "@reduxjs/toolkit";

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
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tasks`, {
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
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tasks/${taskId}`, {
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
