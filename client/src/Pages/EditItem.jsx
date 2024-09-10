import { useEffect, useState } from "react";

const EditItem = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    dueDate: "",
  });

  //fetch the task by id to prefill the form
  useEffect(() => {
    const fetchTask = async() => {
      try {
        const respons = await axios.
        
      } catch (error) {
        console.log("Error fetching task", error);
      }
    }
  })

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
      <h2 className="text-center uppercase text-2xl font-medium">Edit Task</h2>
      <hr className="mb-10 h-[1px] w-[20%] mx-auto border-0 bg-slate-400" />
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3"
        required onChange={handleOnChange} value={data.title}
      />
      <textarea
        name="description"
        id="description"
        placeholder="Task Description"
        className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3"
        onChange={handleOnChange} value={data.description}
      >{data.description}</textarea>
      <select
        name="priority"
        id="priority"
        className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3" onChange={handleOnChange} value={data.priority}
        required
      >
        <option value="">** Choose Priority **</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        name="status"
        id=""
        className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3" onChange={handleOnChange} value={data.status}
        required
      >
        <option value="">** Choose status of the task **</option>
        <option value="Pending">Pending</option>
        <option value="In-Progress">In-Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <label htmlFor="dueDate">Due Date</label> 
      <input
        type="date"
        name="dueDate"
        id="dueDate"
        className="border border-black focus:outline-slate-800 rounded p-2 w-full mb-3" onChange={handleOnChange} value={data.dueDate}
      />
      <button
        type="submit"
        className="rounded p-1 w-1/2 max-nav-xs:w-full mx-auto bg-sky-300 ring-2 ring-slate-600 mt-6"
      >
        Update Task
      </button>
    </form>
  );
};

export default EditItem;
