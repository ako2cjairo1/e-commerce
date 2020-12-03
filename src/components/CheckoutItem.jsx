import React from 'react'
import '../CheckoutItem.css'
import { useProductContext } from '../ProductProvider'

export default function CheckOutItem({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useProductContext();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }
    return (
        <div key={id} className='checkoutItem'>
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

                {/* <div className="row">
                    <div className="col-2">
                        <button className="add">
                        +
                        </button>
                        <button className="remove">
                        -
                        </button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x P{item.price.toFixed(2)}
                    </div>
                </div> */}
                <button className="checkoutItem__removeButton" onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}
