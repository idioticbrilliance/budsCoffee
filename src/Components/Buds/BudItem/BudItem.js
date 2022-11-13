import React, { useContext } from 'react';

import CartContext from '../../../Store/CartContext';
import styles from './BudItem.module.css';
import BudItemForm from './BuditemForm';

const BudItem = (props) => {
  // point back to CartContex.js
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addToCart({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.bud}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <BudItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default BudItem;
