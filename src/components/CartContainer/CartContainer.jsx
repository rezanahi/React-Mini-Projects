import './CartContainer.css'
import {useCartContext} from "../../pages/14-cart-project/CartContext";
import CartItem from "../CartItem/CartItem";


function CartContainer ({dispatch}) {
    const { cart } = useCartContext()
    let total = 0
    cart.forEach((cartItem) => {
        total += (cartItem.price * cartItem.amount)
    })
    if (cart.length === 0) {
        return (
            <section className='min-h-screen w-[90vw] my-0 mx-auto mt-10 py-9 px-0 max-w-[1170px]'>
                {/* cart header */}
                <header>
                    <h2 className='uppercase text-center mb-12'>your bag</h2>
                    <h4 className='lowercase text-gray-700 mt-4 text-center'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='min-h-screen w-[90vw] md:w-[70vw] my-0 mx-auto mt-10 py-9 px-0 max-w-[1170px]'>
            {/* cart header */}
            <header>
                <h2 className='uppercase text-center mb-12'>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                {cart.map((item) => {
                    return <CartItem dispatch={dispatch} key={item.id} {...item} />
                })}
            </div>
            {/* cart footer */}
            <footer className='mt-16 text-center'>
                <hr />
                <div>
                    <h4 className='bg-transparent flex justify-between mt-4'>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button
                    className='uppercase bg-transparent border border-red-900 rounded-md text-red-950 py-2 px-4 inline-block font-bold transition text-sm cursor-pointer shadow hover:bg-red-950 hover:text-white mt-9'
                    onClick={() => dispatch({type: 'DeleteAllItems'})}
                >
                    clear cart
                </button>
            </footer>
        </section>
    )
}


export default CartContainer