import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { AppContext } from "../Components/AppContext";

const Task = () => {
  const { id } = useParams(); 
  const [task, setTask] = useState(null);
  const { url, token } = useContext(AppContext);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(`${url}/api/tasks/${id}`, {
          headers: { token },
        });
        if (response.data.success) {
          setTask(response.data.data);
        } 
      } catch (error) {
        console.error("Error fetching task details:", error);
        toast.error("Error fetching task details");
      }
    };

    fetchTaskDetails();
  }, [id, token, url]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-4">{task.title}</h1>
      <p className="mb-2"><strong>Description:</strong> {task.description}</p>
      <p className="mb-2">
        <strong>Due Date:</strong> {format(new Date(task.dueDate), "PPPP")}
      </p>
      <p className="mb-2"><strong>Status:</strong> {task.completed ? "Completed" : "Pending"}</p>
      {/* Add more task details as needed */}
    </div>
  );
};

export default Task;
