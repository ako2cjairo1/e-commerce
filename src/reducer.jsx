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
            return {
                // TODO: implement a remove to basket functionality
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