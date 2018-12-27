import React, { Component } from 'react';
class ProductList extends Component {
    render() {
    const {goodlists}=this.props
    console.log(goodlists);
    
    const showList = <ul>{goodlists.map(e=><li key={e.id}><div><p>{e.goodName}</p><p>{e.price}</p><button disabled={e.inventory!==0?false:true}>add to cart</button></div></li>)}</ul>
        return (
            <div>
               {showList?showList:<div>waiting</div>}
            </div>
        );
    }
}

export default ProductList;