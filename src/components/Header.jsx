import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" flex justify-evenly items-center pt-4">
      <Link to="/">
        <h1 className=" font-bold tracking-[10px] text-lg">Task App</h1>
      </Link>
      <Link
        to="/add"
        className=" bg-[#9DC08B] p-4 text-white rounded-md hover:bg-[#609966]"
      >
        <button>Add a Task</button>
      </Link>
    </div>
  );
}

export default Header;
