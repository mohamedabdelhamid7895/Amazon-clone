/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal';
// eslint-disable-next-line no-unused-vars
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
          <div className="checkout__left">
           
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout image" />
            
            {basket.length===0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>you have no items in your basket</p>
                </div>
            ):(
                 <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    { basket.map(item => (
                        <CheckoutProduct
                          id= {item.id}
                          title= {item.title}
                          image= {item.image}
                          price= {item.price}
                        />
                      ))}
                </div>
            )};
            </div>
            {basket.length>0 &&(
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
