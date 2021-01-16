import React from 'react'
import '../Product.css'
import { useProductContext } from '../ProductProvider';
import CheckIcon from '@material-ui/icons/Check';

export default function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useProductContext();
    
    const addToBasket = () => {
        // dispatch item into Data Layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    };
    
    return (
        <div className='product'>
            <div className="product__info">
                <p>{ title }</p>
                <p className="product__price">
                    <small>₱ </small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map(() => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img
                className="product__image"
                src={ image }
                alt=""
            />
            <CheckIcon /> <p>Added to Cart</p>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}
