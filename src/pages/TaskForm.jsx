import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContest } from "../context/TaskContest";

function TaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, createTask, updateTask } = useContext(TaskContest);
  const [task, setTask] = useState({ id: "", title: "", text: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /*  setTitle("");
    setText("");*/
    if (task.title !== "" && task.text !== "") {
      if (task.id) {
        updateTask(task);
      } else {
        createTask(task);
      }
      navigate("/");
    } else {
      const texto = "insert a value";
    }
  };

  useEffect(() => {
    const taskfound = tasks.find((task) => task.id === id);

    if (taskfound) {
      setTask(taskfound);
    }
  }, [tasks, id]);

  return (
    <div className=" flex justify-center flex-col items-center h-[80vh]  ">
      <h2 className=" mb-7 text-3xl">
        {task.id ? "Editing a task" : "Creating a task"}
      </h2>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col  space-y-5  bg-white p-8 rounded-md shadow-lg"
      >
        <input
          className=" bg-[#EDF1D6] w-[200px] h-12"
          name="title"
          type="text"
          placeholder="insert a value"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          className=" bg-[#EDF1D6] w-[200px] h-12 "
          name="text"
          placeholder="escribe una descripcion"
          onChange={handleChange}
          value={task.text}
        ></textarea>

        <button className=" p-4 bg-[#9DC08B] rounded-md hover:bg-[#609966] text-white">
          {task.id ? "edit" : "create"} task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
