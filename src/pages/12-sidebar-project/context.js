import { useContext, createContext} from "react";


export const AppContext = createContext('HelloWorld')


export const useGlobal = () => {
    return useContext(AppContext)
}

