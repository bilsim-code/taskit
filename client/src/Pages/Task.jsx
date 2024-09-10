import { useContext, useEffect, useState } from "react"
import { AppContext } from "../Components/AppContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const Task = () => {
    const [task, setTask] = useState({});
    const {url, token, fetchTaskList} = useContext(AppContext);
    const id = useParams();

    useEffect(() => {
        const fetchTask = async () => {
          try {
            const response = await axios.get(`${url}/api/tasks/${id}`, {
              headers: { token },
            });
            if (response.data.success) {
              setTask(response.data.data);
            }
          } catch (error) {
            console.log("Error fetching task", error);
          }
        };
        fetchTask();
      }, [id, url, token]);
  return (
    <div>

    </div>
  )
}

export default Task