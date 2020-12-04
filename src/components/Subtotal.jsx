import React from 'react'
import '../Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useProductContext } from '../ProductProvider';
import { getBasketItemsCount, getBasketSubTotal } from '../reducer';
import { useHistory } from 'react-router-dom';

export default function Subtotal() {
    const history = useHistory();
    const [{ basket }, _] = useProductContext();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({getBasketItemsCount(basket)} items): <strong>{ value }</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketSubTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"P"}
            />
            <button onClick={ () => history.push('/payment')}>Proceed to checkout</button>
        </div>
    );
}
