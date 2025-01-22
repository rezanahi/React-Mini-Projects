import './CartNavbar.css'

import {useCartContext} from "../../pages/14-cart-project/CartContext";


function CartNavbar() {
    const {cart} = useCartContext();
    let amount = 0
    cart.forEach(item => {
        amount += item.amount
    })
    return(
        <>
            <nav className='bg-blue-300 py-5 px-8'>
                <div className='max-w-[1170px] w-full my-0 mx-auto flex justify-between items-center'>
                    <h3 className='mb-0 text-white'>useReducer</h3>
                    <div className='block relative'>
                        <svg className='w-8 fill-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
                        </svg>
                        <div className='absolute -top-3 -right-3 w-7 h-w rounded-full bg-blue-200 flex items-center justify-center'>
                            <p className='text-white mb-0 text-lg'>{amount}</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default CartNavbar