import { createContext } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext();

const ProviderFunction = (props) => {
    return(
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )
}

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;