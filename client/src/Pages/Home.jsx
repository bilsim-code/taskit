import { Link } from "react-router-dom";
//import taskList from "../Components/taskList";
import { FaChevronDown } from "react-icons/fa";
import { useContext, } from "react";
import { AppContext } from "../Components/AppContext";

const Home = () => {
    const {taskList, } = useContext(AppContext);
  return (
    <div className="max-w-4xl mx-auto p-2 min-h-[70vh]">
      <div className="text-center pb-4">
        <h2 className="text-2xl">
          Welcome, <span className="text-green-500 font-semibold">Bildad</span>
        </h2>
        <p className="text-lg pt-2">
          Add new tasks, edit existing tasks or delete tasks
        </p>
        <hr className="bg-green-500 h-[1px] w-1/4 mt-2  mx-auto border-0" />
      </div>
      <Link to={"/add-task"} className="flex justify-end mt-6">
        <span className="bg-green-500 p-2 rounded-2xl font-semibold text-white text-sm hover:text-slate-200">
          + Add New Task
        </span>
      </Link>

      <button className="flex items-center rounded-2xl gap-2 ring-2 ring-sky-300 bg-sky-50 p-2 w-[200px] max-w-full justify-center mx-auto mt-10 cursor-text">
        <h1 className="font-semibold">My Tasks</h1>
        <FaChevronDown className="size-3" />
      </button>

      <ul className="flex flex-col gap-4 mt-10">
        {taskList.map((item, index) => (
          <li
            key={index}
            className="bg-sky-50 shadow shadow-slate-400 rounded-2xl  px-4 py-2.5 flex flex-col "
          >
            <div className="flex justify-between items-center max-nav-xxs:flex-col max-nav-xxs:gap-4">
              <a href="#" className="font-medium">
                {item.title}
              </a>
              <div className="flex gap-2">
                <a
                  href={`/edit/${item._id}`}
                  className="bg-green-500 rounded-lg text-white p-1 px-4 max-nav-xxs:p-1 max-nav-xxs:px-2"
                >
                  Edit
                </a>
                <form action={`/delete/${item._id}`}>
                  <button
                    type="submit"
                    className="bg-red-600 p-1 px-4 rounded-lg text-white max-nav-xxs:p-1"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
            <div className="place-self-end pt-3 text-slate-500 text-sm">
              duedate
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
