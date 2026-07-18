import React, { useState } from "react";

const CreateTask = ({ employees, setEmployees }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription: description,
      taskDate: date,
      category,
    };

    const updatedEmployees = employees.map((emp) => {
      if (
        emp.firstName.toLowerCase() === assignTo.toLowerCase()
      ) {
        return {
          ...emp,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active + 1,
            newTask: emp.taskCounts.newTask + 1,
          },
          tasks: [...emp.tasks, newTask],
        };
      }
      return emp;
    });

    setEmployees(updatedEmployees);

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    setTaskTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");

    alert("Task Created Successfully");
  };

  return (
    <div className="w-full mt-10">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap justify-between gap-10 bg-[#1c1c1c] p-8 rounded-xl"
      >
        <div className="w-full md:w-[45%] flex flex-col gap-5">
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="border p-3 rounded bg-transparent"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-3 rounded bg-transparent"
          />

          <input
            type="text"
            placeholder="Assign To"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="border p-3 rounded bg-transparent"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-3 rounded bg-transparent"
          />
        </div>

        <div className="w-full md:w-[45%] flex flex-col">
          <textarea
            rows="10"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-3 rounded bg-transparent"
          />

          <button
            type="submit"
            className="mt-5 bg-emerald-500 py-3 rounded"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;