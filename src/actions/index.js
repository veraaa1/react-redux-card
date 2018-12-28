import axios from 'axios';
export const showLists=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3008/products').then(res=>{
            
            dispatch({
                type:"SHOW_LISTS",
                goodlists:res.data
            })
        })
    }

}

export const addCart=(goodsId,inventory)=>{
return (dispatch)=>{axios.patch(`http://localhost:3008/products/${goodsId}`,{inventory:inventory-1}).then(res=>{
    dispatch({
        type:"ADD_CART",
        goodsId
    })
})
}}

export const removeCart=(goodsId,inventory)=>{
    return (dispatch)=>{axios.patch(`http://localhost:3008/products/${goodsId}`,{inventory:inventory+1}).then(res=>{
        dispatch({
            type:"REMOVE_CART",
            goodsId
        })
    })
    }}
//这是自己写的瞎写的
export const addCartList=(goodId,carts)=>{
    return (dispatch)=>{
    const newCarts = {...carts}    
    if(newCarts.productId.indexOf(goodId)===-1){
        newCarts.productId.push(goodId)
        newCarts.quantityById[goodId]=1
    }else{
        newCarts.quantityById[goodId]++
    }
    console.log(newCarts);
    axios.patch('http://localhost:3008/carts',newCarts).then(res=>{
        dispatch({
            type:"UPDATE_CARTLIST",
            cartObj:res.data
        })
    })
}}

export const showCart =()=>{
    return (dispatch)=>{
    axios.get(`http://localhost:3008/carts`).then(res=>{
        dispatch({
            type:"SHOW_CART",
            cartObj:res.data
        })
    })}
}

export const checkOut=()=>{
    const nullObj={
        productId:[],
        quantityById:{}
    }
    return (dispatch)=>{
    axios.patch(`http://localhost:3008/carts`,nullObj).then(res=>{
        dispatch({
            type:"CHECK_IT_OUT",
            nullObj
        })
    })
       
    }
}

export const cutNum =(goodId,carts)=>{
 return dispatch=>{
    const newCarts = {...carts}    
    if(newCarts.quantityById[goodId]>1){
        newCarts.quantityById[goodId]--
    }else{
        console.log(newCarts.productId);
        
        newCarts.productId = newCarts.productId.filter(e=>e!==goodId)
        delete newCarts.quantityById[goodId]
    }
    axios.patch(`http://localhost:3008/carts`,newCarts).then(res=>{
        dispatch({
            type:"CUT_ITEM_NUM",
            newCarts
        })
    })
 }
}