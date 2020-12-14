import { useState, createContext } from "react";

export const SpinnerContext = createContext();

const SpinnerProvider = (props) => {

    // show or hide spinner
    const [showSpinner, setShowSpinner] = useState(false);

    return (
        <SpinnerContext.Provider
            value={{
                showSpinner,
                setShowSpinner
            }}
        >
            {props.children}
        </SpinnerContext.Provider>
    )
}
 
export default SpinnerProvider;