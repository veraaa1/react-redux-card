import axios from 'axios';
import * as actionTypes from '../constants';

// 为了部署数据
export const showLists=()=>{
    return (dispatch)=>{
        axios.get('https://raw.githubusercontent.com/veraaa1/react-redux-card/master/api/db.json').then(res=>{
            console.log(res.data);
            
            dispatch({
                type:actionTypes.SHOW_LISTS,
                goodlists:res.data.products
            })
        })
    }

}
export const addCart=(goodsId,inventory)=>{
return {
   
                type:actionTypes.ADD_CART,
                goodsId
    
    }
}
export const removeCart=(goodsId,inventory)=>{
    return {
            type:actionTypes.REMOVE_CART,
            goodsId
       
   
    }}
export const addCartList=(goodId,carts,goodlists)=>{
    return (dispatch)=>{
    const newCarts = {...carts}    
    if(newCarts.productId.indexOf(goodId)===-1){
        newCarts.productId.push(goodId)
        newCarts.quantityById[goodId]=1
    }else{
        
        if(goodlists.find(e=>e.id===goodId).inventory!==0){
            newCarts.quantityById[goodId]++
        }else{
            alert("库存不足！！！")
        }
        
    }
        dispatch({
            type:actionTypes.UPDATE_CARTLIST,
            cartObj:newCarts
        })
    
}}

export const showCart =()=>{
    return (dispatch)=>{
    axios.get(`https://raw.githubusercontent.com/veraaa1/react-redux-card/master/api/db.json`).then(res=>{
        dispatch({
            type:actionTypes.SHOW_CART,
            cartObj:res.data.carts
        })
    })}
}

export const checkOut=()=>{
    const nullObj={
        productId:[],
        quantityById:{}
    }
    return{
   
            type:actionTypes.CHECK_IT_OUT,
            nullObj
    
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
   
        dispatch({
            type:actionTypes.CUT_ITEM_NUM,
            newCarts
        })
  
 }
}
// 将action 导出的东西全部放在 actionTypes 对象内
// export const showLists=()=>{
//     return (dispatch)=>{
//         axios.get('http://localhost:3008/products').then(res=>{
            
//             dispatch({
//                 type:actionTypes.SHOW_LISTS,
//                 goodlists:res.data
//             })
//         })
//     }

// }

// export const addCart=(goodsId,inventory)=>{
// return (dispatch)=>{
//     if(inventory>0){
//         axios.patch(`http://localhost:3008/products/${goodsId}`,{inventory:inventory-1}).then(res=>{
//             dispatch({
//                 type:actionTypes.ADD_CART,
//                 goodsId
//             })
//         })
//     }
// }}

// export const removeCart=(goodsId,inventory)=>{
//     return (dispatch)=>{axios.patch(`http://localhost:3008/products/${goodsId}`,{inventory:inventory+1}).then(res=>{
//         dispatch({
//             type:actionTypes.REMOVE_CART,
//             goodsId
//         })
//     })
//     }}
// //这是自己写的瞎写的
// export const addCartList=(goodId,carts,goodlists)=>{
//     return (dispatch)=>{
//     const newCarts = {...carts}    
//     if(newCarts.productId.indexOf(goodId)===-1){
//         newCarts.productId.push(goodId)
//         newCarts.quantityById[goodId]=1
//     }else{
        
//         if(goodlists.find(e=>e.id===goodId).inventory!==0){
//             newCarts.quantityById[goodId]++
//         }else{
//             alert("库存不足！！！")
//         }
        
//     }
//     console.log(newCarts);
//     axios.patch('http://localhost:3008/carts',newCarts).then(res=>{
//         dispatch({
//             type:actionTypes.UPDATE_CARTLIST,
//             cartObj:res.data
//         })
//     })
// }}

// export const showCart =()=>{
//     return (dispatch)=>{
//     axios.get(`http://localhost:3008/carts`).then(res=>{
//         dispatch({
//             type:actionTypes.SHOW_CART,
//             cartObj:res.data
//         })
//     })}
// }

// export const checkOut=()=>{
//     const nullObj={
//         productId:[],
//         quantityById:{}
//     }
//     return (dispatch)=>{
//     axios.patch(`http://localhost:3008/carts`,nullObj).then(res=>{
//         dispatch({
//             type:actionTypes.CHECK_IT_OUT,
//             nullObj
//         })
//     })
       
//     }
// }

// export const cutNum =(goodId,carts)=>{
//  return dispatch=>{
//     const newCarts = {...carts}    
//     if(newCarts.quantityById[goodId]>1){
//         newCarts.quantityById[goodId]--
//     }else{
//         console.log(newCarts.productId);
        
//         newCarts.productId = newCarts.productId.filter(e=>e!==goodId)
//         delete newCarts.quantityById[goodId]
//     }
//     axios.patch(`http://localhost:3008/carts`,newCarts).then(res=>{
//         dispatch({
//             type:actionTypes.CUT_ITEM_NUM,
//             newCarts
//         })
//     })
//  }
// }