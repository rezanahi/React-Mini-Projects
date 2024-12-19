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
            <section className='p14-cart'>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className='p14-empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='p14-cart'>
            {/* cart header */}
            <header>
                <h2>your bag</h2>
            </header>
            {/* cart items */}
            <div>
                {cart.map((item) => {
                    return <CartItem dispatch={dispatch} key={item.id} {...item} />
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className='p14-cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button
                    className='p14-btn p14-clear-btn'
                    onClick={() => dispatch({type: 'DeleteAllItems'})}
                >
                    clear cart
                </button>
            </footer>
        </section>
    )
}


export default CartContainer