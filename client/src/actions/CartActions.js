export const addToCartAction=(pizza,varient,quantity)=>(dispatch,getState)=>{
    const cartItem={
        name:pizza.name,
        _id:pizza._id,
        prices:pizza.prices,
        varient:varient,
        quantity:Number(quantity),
        image:pizza.image,
        price:pizza.prices[0][varient]*quantity
    }
    if(quantity>10)
    {
        alert("you can't add more than 10 items")
    }
    else if(quantity<1)
    {
        alert("the min number is one item")
    }
    else{

        dispatch({type:"ADD_TO_CART",payload:cartItem})
        localStorage.setItem("cartItems",JSON.stringify(getState().addToCart.cartItems))
    }
}

export const deleteFromCartAction=(pizza)=>(dispatch,getState)=>{
    dispatch({type:"DELETE_FROM_CART",payload:pizza})
    localStorage.setItem("cartItems",JSON.stringify(getState().addToCart.cartItems))
}