import { useContext, useEffect, useState } from "react"
import { AppContext } from "../Components/AppContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import {toast } from 'react-toastify';
import {format} from 'date-fns';

const Task = () => {
    const [task, setTask] = useState(null);
    const {url, token, } = useContext(AppContext);
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
        <h2>{task}</h2>
    </div>
  )
}

export default Task