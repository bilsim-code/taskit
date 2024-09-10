import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const ProviderFunction = (props) => {
    const url = "http://localhost:3000";
    const [token, setToken] = useState(null);
    const [taskList, setTaskList] = useState([]);
    const navigate = useNavigate();

   useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if(savedToken) {
        setToken(savedToken);
        fetchTaskList(savedToken); 
    }
    else {
        navigate('/auth')
    }
   
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   useEffect(() => {
    if(token) {
        fetchTaskList(token);
    }
   }, [token]); //fetch tasks when the token changes.

   //fetch tasks list
   async function fetchTaskList(savedToken) {
    if(!savedToken) {
        return;
    }
    try {
     const response = await axios.get(`${url}/api/tasks`, {headers: {token: savedToken}}); 
    if(response.data.success) {
        setTaskList(response.data.data);
    }     
    else {
        console.log("Failed to fetch tasks", response.data.message)
    }
    } catch (error) {
        console.log(error);
    }
  
   }
    return(
        <AppContext.Provider value={{url, setToken, token, taskList, setTaskList, fetchTaskList }}>
            {props.children}
        </AppContext.Provider>
    )
}

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;