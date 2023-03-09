import { useContext, useState } from "react";
import Archivo from "../components/Archivo";
import { TaskContest } from "../context/TaskContest";

function Archivos() {
  const { tasks } = useContext(TaskContest);

  return (
    <div className=" flex justify-center pt-8 px-8 bg-[#EDF1D6]">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {tasks.map((task) => (
          <Archivo
            title={task.title}
            text={task.text}
            key={task.id}
            id={task.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Archivos;
