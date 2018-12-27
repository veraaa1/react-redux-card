const initProducts=[]
const products = (state=initProducts,action)=>{
    switch(action.type){
        case "SHOW_LISTS":
        return action.goodlists
        default:return state
    }
}
export default products