import React, { useReducer } from 'react';

import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADDED_TO_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const currentCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const currentCartItems = state.items[currentCartItemsIndex];

    let updatedItems;

    if (currentCartItems) {
      const updatedItem = {
        ...currentCartItems,
        amount: currentCartItems.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[currentCartItemsIndex] = updatedItem; //check
    } else {
      updatedItems = state.items.concat(action.item);
    }

    //const updatedItems = state.items.concat(action.item);//check
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_FROM_CART") {
    const currentCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const currentCartItems = state.items[currentCartItemIndex];
    const updateTotalAmount = state.totalAmount - currentCartItems.price;

    let updatedItems;

    if (currentCartItems.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...currentCartItems,
        amount: currentCartItems.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[currentCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addToCartHandler = (item) => {
    dispatchCartState({
      type: "ADDED_TO_CART",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const contextForCart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addToCart: addToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={contextForCart}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
