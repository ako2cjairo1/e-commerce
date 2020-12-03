export const initialState = {
    basket: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const itemIndex = state.basket.findIndex((item) => item.id == action.id);
            let newBasket = [...state.basket];
            
            if (itemIndex >= 0) {
                newBasket.splice(itemIndex, 1);
            }

            return {
                ...state,
                basket: newBasket
            };
        
        default:
            return state;
    }
};

// Selector
export const getBasketItemsCount = (basket) => { 
    return basket.length;
};

export const getBasketSubTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);