import React, { Component } from 'react';
import {addCart,addCartList} from '../../actions'
import {connect} from 'react-redux'
import styled from 'styled-components';
import './productlist.scss'
//这是自己写的
class ProductList extends Component {
    render() {
    const {goodlists,carts}=this.props
    console.log(goodlists);
    const showList = <Ul>{goodlists.map(e=><li key={e.id}><div><img src={e.goodImg} alt=""/><p>{e.goodName}</p><p>{e.price}元</p><p>剩余：{e.inventory}件</p><button disabled={e.inventory!==0?false:true} onClick={()=>{this.addCart(e.id,e.inventory)
    this.addCartList(e.id,carts,goodlists)
    }}>add to cart</button></div></li>)}</Ul>
        return (
            <div>
               {showList?showList:<div>waiting</div>}
            </div>
        );
    }
    addCart=(goodsId,inventory)=>{
        const{addCart}=this.props
        addCart(goodsId,inventory)
    }
    addCartList=(goodId,carts,goodlists)=>{
        const {addCartList}=this.props
        addCartList(goodId,carts,goodlists)
    }
}

export default connect(null,{addCart,addCartList})(ProductList);
const Ul=styled.ul`
list-style:none;
display:flex;
width:964px;
margin:0 auto;
justify-content:flex-start;
>li{
    width:15%;
    border:1px solid #ccc;
    padding:10px;
    margin-left:5px;
}
>li>div{
    width:100%;
}
>li>div>img{
    width:100%;
    display: block;
    margin:0 auto;
}
`