import React, { createContext, useState } from 'react';

// Create a context
export const ItemContext = createContext();

// Create a provider component
export const ItemProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    // Function to add an item to the context state
    const addItem = (item) => {
        setSelectedItems((prevItems) => [...prevItems, item]);
    };

    return (
        <ItemContext.Provider value={{ selectedItems, addItem }}>
            {children}
        </ItemContext.Provider>
    );
};
