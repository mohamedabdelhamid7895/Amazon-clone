import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id,image,title,price}) {
    // eslint-disable-next-line no-unused-vars
    const [{basket }, dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src= {image} alt="product " />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <strong>${price}</strong>
                </p>

                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
            
        </div>
    );
}

export default CheckoutProduct;
