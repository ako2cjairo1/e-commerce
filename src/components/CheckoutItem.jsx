import React from 'react'
import '../CheckoutItem.css'
import { useProductContext } from '../ProductProvider'

export default function CheckOutItem({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useProductContext();
    const removeFromBasket = () => {
        // TODO: create reducer to remove the item from the basket
    }
    return (
        <div className='checkoutItem'>
            <img src={image} alt="" className="checkoutItem__image" />

            <div className="checkoutItem__info">
                <p className='checkoutItem__title'>{title}</p>
                <p className="checkoutItem__price">
                    <small>P</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutItem__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>⭐</p>
                            ))
                    }
                </div>
                <button className="checkoutItem__removeButton" onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}
