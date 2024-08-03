import { createContext } from "react";

export const AppContext = createContext()

const ContextProvider = (props) =>{

    const phone = '+91 95949432'
    const name = 'rahul'

    return(
        <AppContext.Provider value={{phone,name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider
