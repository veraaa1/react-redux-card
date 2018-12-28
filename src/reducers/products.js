import { SHOW_LISTS,REMOVE_CART,ADD_CART } from '../constants';
const initProducts=[]
const products = (state=initProducts,action)=>{
    switch(action.type){
        case SHOW_LISTS:
        return action.goodlists
        case ADD_CART:return state.map(e=>{
            if(e.id===action.goodsId){
                e.inventory = e.inventory - 1
            }
            return e
        })
        case REMOVE_CART:return state.map(e=>{
            if(e.id===action.goodsId){
                e.inventory = e.inventory + 1
            }
            return e
        })
        default:return state
    }
}
export default products