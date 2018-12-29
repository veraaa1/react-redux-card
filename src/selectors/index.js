export const isCartEmpty =(cart,goodlists)=>{
    // 判断购物车是否是空
    if(cart.productId.length && goodlists.length){
        return true
    }else{
        return false
    }
}

export const getTotal =(sureGood,carts,goodlists)=>{
    const newCartgood = sureGood?carts.productId.filter(ele=>{if(sureGood[ele]===true){return ele}}):[]
    console.log(newCartgood);
    const total = newCartgood.length?newCartgood.reduce((num,ele)=>{
     return num = num+goodlists.find(e=>e.id===ele).price*carts.quantityById[ele]
    },0):0
    return total
}
// selectors 文件夹计算衍生数据 Redux 理念就是不要在组件内进行各种各样的数据计算