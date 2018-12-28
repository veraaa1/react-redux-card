//这是自己写的瞎写的
import { SHOW_CART,UPDATE_CARTLIST,CHECK_IT_OUT,CUT_ITEM_NUM } from '../constants';
const initCart ={
    productId:[],
    quantityById:{} 
}
// 推荐的购物车写法如上
const cart =(state=initCart,actions)=>{
    switch(actions.type){
        case SHOW_CART:return actions.cartObj
        case UPDATE_CARTLIST:return actions.cartObj
        case CHECK_IT_OUT:return actions.nullObj
        case CUT_ITEM_NUM:return actions.newCarts
        default:return state
    }
}
export default cart
// reducer 的 case 里不能 const 同一个名字 会报错！