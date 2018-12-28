import React, { Component } from 'react';
import {showCart,checkOut,addCartList,addCart,cutNum,removeCart} from '../../actions'
import { connect } from 'react-redux';
import styled from 'styled-components'
import { isCartEmpty } from '../../selectors';
class PrivateCart extends Component {
    state={
   
        sureGood:null
    }
    componentDidMount() {
        const {showCart}=this.props
        showCart()
    }
    
    render() {
        const {carts,goodlists}=this.props
        const{sureGood}=this.state
        console.log(sureGood);
        
       const newCartgood = sureGood?carts.productId.filter(ele=>{if(sureGood[ele]===true){return ele}}):[]
       console.log(newCartgood);
       const total = newCartgood.length?newCartgood.reduce((num,ele)=>{
        return num = num+goodlists.find(e=>e.id===ele).price*carts.quantityById[ele]
       },0):0
        // const total = carts.productId.length && goodlists.length?carts.productId.reduce((num,ele,index,array)=>{
        //    return num = num+goodlists.find(e=>e.id===ele).price*carts.quantityById[ele]
        // },0):0
        // 已知cart 对象，goodlist数组
        return (
            <div>
               {isCartEmpty(carts,goodlists)?
               <ul>
               {carts.productId.map(
                   e=>{
               const good = goodlists.find(good=>good.id===e)
               return <li key={e.id}><input type="checkbox" onChange={()=>{this.onChecked(e)}}
               checked={sureGood?sureGood[e.id]:false}></input> {good.goodName} <span>{good.price}元/个</span><div><button onClick={()=>{
                   this.removeCart(e,goodlists.find(ele=>ele.id===e).inventory)
                   this.cutNum(e,carts)}}>-</button>
               <span>{carts.quantityById[e]}</span>
               <button onClick={()=>{
                   this.addCart(e,goodlists.find(ele=>ele.id===e).inventory)
                   this.addCartList(e,carts,goodlists)
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
    addCartList=(goodId,carts,goodlists)=>{
        const{addCartList}=this.props
        addCartList(goodId,carts,goodlists)
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
    onChecked=(id)=>{
      
        const {sureGood}=this.state
        const newgood = {...sureGood}
        if(newgood[id]){
            newgood[id]=!newgood[id]
        }else{
            newgood[id]=true
        }
        this.setState({
            sureGood:newgood,
           
        })
    }
}

export default connect(null,{showCart,checkOut,addCartList,addCart,cutNum,removeCart})(PrivateCart);

