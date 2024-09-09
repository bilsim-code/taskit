import {  useState } from "react"

const AddTask = () => {
  const [data, setData ] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    dueDate: "",
  })

  const handleOnchange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData(prev => ({...prev, [name]: value})); 
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
  }

  return (
    <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
    <h2 className="text-center uppercase text-2xl font-medium">Add Task</h2>
    <hr className="mb-10 h-[1px] w-[20%] mx-auto border-0 bg-slate-400"/>
    <input type="text" name="title" placeholder="Task Title" className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3" required onChange={handleOnchange} value={data.title} />
    <textarea name="description" id="description" placeholder="Task Description" className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3" onChange={handleOnchange} value={data.description}></textarea>
    <select name="priority" id="priority" className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3" required onChange={handleOnchange} value={data.priority} >
        <option value="">** Choose Priority **</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
    <select name="status" id="" className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3" required onChange={handleOnchange} value={data.status}>
        <option value="">** Choose status of the task **</option>
        <option value="pending">Pending</option>
        <option value="inProgress">In-Progress</option>
        <option value="completed">Completed</option>
    </select>
    <input type="date" name="dueDate" id="dueDate" className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3" onChange={handleOnchange} value={data.dueDate}/>
    <button type="submit" className="rounded p-1 w-1/2 max-nav-xs:w-full mx-auto bg-sky-300 ring-2  ring-slate-600 mt-6">Add Task</button>
</form>
  )
}

export default AddTask