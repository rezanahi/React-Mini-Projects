import './CartItem.css'
import {useCartContext} from "../../pages/14-cart-project/CartContext";

function CartItem ({ id, img, title, price, amount, dispatch }) {

    return(
        <>
            <article className='grid items-center grid-cols-[auto_1fr_auto] gap-x-6 my-6'>
                <div className='w-20'>
                    <img className='w-full h-full object-cover' src={img} alt={title}/>
                </div>
                <div>
                <h4 className='mb-2 font-medium'>{title}</h4>
                    <h4 className='text-gray-700'>${price}</h4>
                    {/* remove button */}
                    <button
                        className='text-blue-700 cursor-pointer text-sm bg-transparent border-none mt-1 transition hover:text-blue-900'
                        onClick={() => dispatch({type: 'DeleteOneItem', id: id})}
                    >
                        remove
                    </button>
                </div>
                <div>
                    {/* increase amount */}
                    <button className='w-6 bg-transparent border-none cursor-pointer' onClick={() => dispatch({type: 'IncreaseOneItem', id: id})}>
                        <svg className='fill-blue-500 hover:fill-blue-300 transition' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z'/>
                        </svg>
                    </button>
                    {/* amount */}
                    <p className='text-center mb-0 text-lg'>{amount}</p>
                    {/* decrease amount */}
                    <button className='w-6 bg-transparent border-none cursor-pointer' onClick={() => dispatch({type: 'DecreaseOneItem', id: id})}>
                        <svg className='fill-blue-500 hover:fill-blue-300 transition' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/>
                        </svg>
                    </button>
                </div>
            </article>
        </>
    )
}


export default CartItem