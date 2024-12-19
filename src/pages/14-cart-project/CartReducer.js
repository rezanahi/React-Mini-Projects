function CartReducer (cart, action) {
    switch (action.type) {
        case 'DeleteAllItems' :
            return []

        case 'DeleteOneItem' :
            return cart.filter(item => item.id !== action.id)

        case 'IncreaseOneItem' :
            return cart.map(cartItem => {
                if(cartItem.id === action.id) {
                    return {...cartItem, amount: cartItem.amount + 1}
                } else {
                    return cartItem
                }
            })



        default :
            return cart
    }
}


export default CartReducer