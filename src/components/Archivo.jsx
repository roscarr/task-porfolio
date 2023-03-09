import { useContext } from "react";
import { TaskContest } from "../context/TaskContest";
import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";

function Archivo({ title, text, id }) {
  const { deleteTask } = useContext(TaskContest);

  return (
    <div className=" bg-white p-4 rounded-md ">
      <h2 className=" font-bold">{title}</h2>
      <p className=" h-auto">{text}</p>
      <div className=" space-x-10 flex">
        <Link className=" bg-[#9DC08B] p-2 rounded-md" to={`/edit/${id}`}>
          <GrEdit />
        </Link>
        <button
          onClick={() => deleteTask(id)}
          className=" bg-red-400 p-2 rounded-md"
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default Archivo;
