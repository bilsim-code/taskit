import { Link } from "react-router-dom"
import taskList from "../Components/taskList"

const Home = () => {
  return (
    <div>
        <div>
          <h2>Welcome, <span>Bildad</span></h2>
          <p>Add new tasks, edit existing tasks or delete tasks</p>
        </div>
        <Link>
        <span>+ Add New Task</span>
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