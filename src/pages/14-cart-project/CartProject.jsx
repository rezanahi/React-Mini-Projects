import './CartProject.css'
import CartContainer from "../../components/CartContainer/CartContainer";
import CartNavbar from "../../components/CartNavbar/CartNavbar";
import {useState} from "react";
import {CartContext} from "./CartContext";
import CartProjectData from "./CartProjectData";


function CartProject () {
    const [cart, setCart] = useState(CartProjectData)

    return(
        <>
            <CartContext.Provider value={{cart,}}>
                <main className='block'>
                    <CartNavbar></CartNavbar>
                    <CartContainer></CartContainer>
                </main>
            </CartContext.Provider>
        </>
    )
}


export default CartProject