import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../Payment.css'
import { useProductContext } from '../ProductProvider';
import CheckOutItem from './CheckoutItem';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketSubTotal } from '../reducer';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import { db } from '../firebase';

export default function Payment() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useProductContext();
    
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true);

    // generate Stripe clientSecret key which allows to charge a customer's card
    useEffect(() => {
        const getClientSecret = async () => {
            // Stripe expects the total in a currencies subunits
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketSubTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (e) => {
        // implement stripe functions
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
                                payment_method: {
                                    card: elements.getElement(CardElement)
                                }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        })
    }

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleChange = (e) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} Items</Link>)
                </h1>
                
                {/* Payment section - delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>#321 Pulong Balite</p>
                        <p>Malolos City, Bulacan</p>
                        <p>Philippines 3000</p>
                    </div>
                </div>
                
                {/* Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(item => (
                                <CheckOutItem
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
                
                {/* Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/* TODO: implement stripe animation */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: <strong>{ value }</strong></h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketSubTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₱"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{ processing ? <p>Processing</p> : 'Buy Now' }</span>
                                </button>
                            </div>
                            {
                                error && <div>{error}</div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
