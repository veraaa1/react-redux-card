import React, { Component } from 'react';
import {showCart,checkOut,addCartList,addCart,cutNum,removeCart} from '../../actions'
import { connect } from 'react-redux';
import styled from 'styled-components'
class PrivateCart extends Component {
    
    componentDidMount() {
        const {showCart}=this.props
        showCart()
    }
    
    render() {
        const {carts,goodlists}=this.props
        console.log(678);

        const total = carts.productId.length && goodlists.length?carts.productId.reduce((num,ele,index,array)=>{
           return num = num+goodlists.find(e=>e.id===ele).price*carts.quantityById[ele]
        },0):0
        // 已知cart 对象，goodlist数组
        return (
            <div>
               {carts.productId.length && goodlists.length?
               <ul>
               {carts.productId.map(
                   e=>{
               const good = goodlists.find(good=>good.id===e)
               return <li key={e.id}>{good.goodName} <span>{good.price}元/个</span><div><button onClick={()=>{
                   this.removeCart(e,goodlists.find(ele=>ele.id===e).inventory)
                   this.cutNum(e,carts)}}>-</button>
               <span>{carts.quantityById[e]}</span>
               <button onClick={()=>{
                   this.addCart(e,goodlists.find(ele=>ele.id===e).inventory)
                   this.addCartList(e,carts)
               }}>+</button>
               </div></li>})}
               </ul>:<p>Your Cart is empty！</p>} 
               <div>
                   {
                       carts.productId.length && goodlists.length?<div>total:<span>{total}元</span><button onClick={this.checkOut}>结算</button></div>:<></>
                   }
               </div>
            </div>
        );
    }
    checkOut=()=>{
    const{checkOut}=this.props
    checkOut()
    }
    addCartList=(goodId,carts)=>{
        const{addCartList}=this.props
        addCartList(goodId,carts)
    }
    addCart=(goodId,carts)=>{
    const{addCart}=this.props
    addCart(goodId,carts)
    }
    cutNum=(goodId,carts)=>{
        const{cutNum}=this.props
        cutNum(goodId,carts)
    }
    removeCart=(goodId,carts)=>{
        const{removeCart}=this.props
        removeCart(goodId,carts)
    }
}

export default connect(null,{showCart,checkOut,addCartList,addCart,cutNum,removeCart})(PrivateCart);

