import './CartContainer.css'
import {useCartContext} from "../../pages/14-cart-project/CartContext";
import CartItem from "../CartItem/CartItem";


function CartContainer () {
    const { cart } = useCartContext()
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
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            {/* cart footer */}
            <footer>
                <hr />
                <div className='p14-cart-total'>
                    <h4>
                        total <span>$0.00</span>
                    </h4>
                </div>
                <button
                    className='p14-btn p14-clear-btn'
                    onClick={() => console.log('clear cart')}
                >
                    clear cart
                </button>
            </footer>
        </section>
    )
}


export default CartContainer