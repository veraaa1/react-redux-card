export const isCartEmpty =(cart,goodlists)=>{
    // 判断购物车是否是空
    if(cart.productId.length && goodlists.length){
        return true
    }else{
        return false
    }
}