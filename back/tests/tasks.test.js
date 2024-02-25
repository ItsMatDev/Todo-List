const request = require("supertest");
const app = require("../app.js");

describe("Testing tasks routes", () => {
  it("GET /tasks should return all tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    if (res.body.length > 0) {
      res.body.forEach((task) => {
        expect(task).toHaveProperty("id");
        expect(task).toHaveProperty("text");
      });
    }
  });

  it("POST /tasks should create a new task", async () => {
    const newTask = { text: "Test task" };
    const res = await request(app).post("/tasks").send(newTask);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.text).toEqual(newTask.text);

    const taskId = res.body.id;
    await request(app).delete(`/tasks/${taskId}`);
  });

  it("DELETE /tasks/:id should delete the new task created", async () => {
    const newTask = { text: "Test task" };

    const createRes = await request(app).post("/tasks").send(newTask);
    expect(createRes.statusCode).toEqual(201);
    expect(createRes.body).toHaveProperty("id");

    const taskId = createRes.body.id;

    const deleteRes = await request(app).delete(`/tasks/${taskId}`);
    expect(deleteRes.statusCode).toEqual(200);
    expect(deleteRes.body.msg).toEqual("Task deleted");
  });
});
