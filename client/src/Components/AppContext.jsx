import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext();

const ProviderFunction = (props) => {
    const url = "http://localhost:3000";
    const [token, setToken] = useState()

    useEffect(() => {
        console.log(token)
    }, [token]);
    return(
        <AppContext.Provider value={{url, setToken}}>
            {props.children}
        </AppContext.Provider>
    )
}

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;