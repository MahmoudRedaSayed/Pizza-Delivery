export const addToCartAction=(pizza,varient,quantity)=>(dispatch,getState)=>{
    const cartItem={
        name:pizza.name,
        _id:pizza._id,
        prices:pizza.prices,
        varient:varient,
        quantity:quantity,
        image:pizza.image,
        price:pizza.prices[0][varient]*quantity
    }
    dispatch({type:"ADD_TO_CART",payload:cartItem})
    localStorage.setItem("cartItems",JSON.stringify(getState().addToCart.cartItems))
}