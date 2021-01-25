/* eslint-disable no-empty-pattern */
import React from 'react'
import './Prouct.css';
import { useStateValue } from './StateProvider';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
function Product({id,title,image,price,rating}) {
  const [{}, dispatch]=useStateValue();
  const addToBasket=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id,
        title,
        image,
        price
      }
    })
  }
    return (
        <div className="product">
          <div className="product__info">  
            <h2>{title}</h2>     
            <p className="product__price">
          
          <strong>${price}</strong>
        </p>
          </div>  
          <img src={image} alt=""/>
         <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}

export default Product
