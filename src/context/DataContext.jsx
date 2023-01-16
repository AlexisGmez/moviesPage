import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext({});


export const DataProvider = ({ children})=>{


    const [state, setState] = useState('superman');
    const { isLoading, error, data} = useFetch(`&s=${state}`);

    return(
        <DataContext.Provider value={{state, setState ,isLoading, error, data}}>
            { children }
        </DataContext.Provider>
    )
}


