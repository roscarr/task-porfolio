import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { lista } from "../data/lista";

export const TaskContest = createContext();

export function TaskContestProvider(props) {
  const [tasks, setTask] = useState([]);

  const createTask = (task) => {
    setTask([...tasks, { id: v4(), title: task.title, text: task.text }]);
  };

  const deleteTask = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  };
  const updateTask = (tasklist) => {
    const updatetask = tasklist;
    const updateTasks = tasks.map((task) => {
      if (task.id === updatetask.id) {
        task.title = updatetask.title;
        task.text = updatetask.text;
      }
      return task;
    });
    setTask(updateTasks);
  };
  /*useEffect(() => {
    setTask(lista);
  }, []);*/
  return (
    <TaskContest.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {props.children}
    </TaskContest.Provider>
  );
}
