import './CartProject.css'
import CartContainer from "../../components/CartContainer/CartContainer";
import CartNavbar from "../../components/CartNavbar/CartNavbar";
import {useReducer} from "react";
import {CartContext} from "./CartContext";
import CartProjectData from "./CartProjectData";
import CartReducer from "./CartReducer";


function CartProject () {
    const [cart, dispatch] = useReducer(CartReducer, CartProjectData);

    return(
        <>
            <CartContext.Provider value={{cart,}}>
                <main className='block bg-blue-200 min-h-screen'>
                    <CartNavbar></CartNavbar>
                    <CartContainer dispatch={dispatch}></CartContainer>
                </main>
            </CartContext.Provider>
        </>
    )
}


export default CartProject