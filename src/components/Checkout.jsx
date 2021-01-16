import React from 'react';
import '../Checkout.css';
import { useProductContext } from '../ProductProvider';
import CheckoutItem from './CheckoutItem';
import Subtotal from './Subtotal';


export default function Checkout() {
    const [{ basket, user }, dispatch] = useProductContext();
    const isBasketEmpty = basket?.length > 0 ? false : true;
    const subtotalDisplay = isBasketEmpty ? 'checkout__right hidden' : 'checkout__right';
    const basketTitle = isBasketEmpty ? 'Your Amazon Basket is empty.' : 'Shopping Basket';
    const emptyBasketDescription = isBasketEmpty ? <p>Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more. <br></br>Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.</p> : '';
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg"
                    alt="Outlet"
                    className="checkout__ad"
                />
                
                <div className="checkout__title">
                    {
                        <h4>Hello, <strong>{ user ? user.email : 'Guest'}</strong></h4>
                    }
                    <h2>{basketTitle}</h2>
                    {emptyBasketDescription}
                </div>
                <div className="checkout__items">
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

            <div className={subtotalDisplay}>
                <Subtotal />
            </div>

        </div>
    )
}
