import {createContext, useContext} from "react";


export const StripeAppContext = createContext()


export const useStripeAppContext = () => useContext(StripeAppContext)