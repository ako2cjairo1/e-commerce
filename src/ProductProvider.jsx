import React, { createContext, useContext, useReducer } from 'react';

// Initialize state context
export const ProductContext = createContext();

// Wrap the App and provide Data Layer
export const ProductProvider = ({ reducer, initialState, children }) => (
    <ProductContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </ProductContext.Provider>
);

// Pull information from the Data Layer
export const useProductContext = () => useContext(ProductContext);