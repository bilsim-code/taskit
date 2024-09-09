import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext();

const ProviderFunction = (props) => {
    const url = "http://localhost:3000";
    const [token, setToken] = useState(null);

   useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if(savedToken) {
        setToken(savedToken);
    }
   }, [])
    return(
        <AppContext.Provider value={{url, setToken, token}}>
            {props.children}
        </AppContext.Provider>
    )
}

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;