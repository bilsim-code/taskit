import { createContext } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext();

const ProviderFunction = (props) => {
    const url = "http://localhost:3000";
    return(
        <AppContext.Provider value={{url}}>
            {props.children}
        </AppContext.Provider>
    )
}

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;