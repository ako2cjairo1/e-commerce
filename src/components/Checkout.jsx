import React from 'react';
import '../Checkout.css';
import { useProductContext } from '../ProductProvider';
import CheckoutItem from './CheckoutItem';
import Subtotal from './Subtotal';


export default function Checkout() {
    const [{ basket }, dispatch] = useProductContext();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="" alt="" className="checkout__ad"/>
                
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {
                        basket.map(item => (
                            <CheckoutItem
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    )
}
