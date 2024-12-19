function CartReducer (cart, action) {
    switch (action.type) {
        case 'DeleteAllItems' :
            return []

        case 'DeleteOneItem' :
            return cart.filter(item => item.id !== action.id)


        default :
            return cart
    }
}


export default CartReducer