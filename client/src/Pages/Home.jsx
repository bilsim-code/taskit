import { Link } from "react-router-dom"
import taskList from "../Components/taskList"

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-2"> 
        <div className="text-center">
          <h2 className="text-2xl">Welcome, <span className="text-green-500 font-semibold">Bildad</span></h2>
          <p className="text-lg pt-2">Add new tasks, edit existing tasks or delete tasks</p>
          <hr className="bg-green-500 h-[1px] w-1/4 mt-2  mx-auto border-0" />
        </div>
        <Link to={'add-task'} className="flex justify-end mt-6">
        <span className="bg-green-500 p-2 rounded-2xl font-semibold text-white text-sm hover:text-slate-200">+ Add New Task</span>
        </Link>

        <h1>My Tasks</h1>
        <ul>
         {taskList.map((item, index) => (
          <li key={index}>
            <a href="#">{item.title}</a>
            <a href={`edit/${item._id}`}>Edit</a>
            <form action={`delete/${item._id}`}>
            <button type="submit">Delete</button>
            </form>
          </li>
         ))}
        </ul>
    </div>
  )
}

export default Home