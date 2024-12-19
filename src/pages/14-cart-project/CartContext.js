import {createContext, useContext} from 'react'

const url = 'https://course-api.com/react-useReducer-cart-project'

const CartContext = createContext()


// make sure use
const useCartContext = () => {
    return useContext(CartContext)
}

export { CartContext, useCartContext }