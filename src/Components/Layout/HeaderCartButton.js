import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import CartContext from '../../Store/CartContext';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  const [addedToCart, setAddedToCart] = useState(false);
  const cartCtx = useContext(CartContext);
  const numOfCartItems = cartCtx.items.reduce((acc, val) => {
    return acc + val.amount;
  }, 0);

  const btnClasses = `${styles.button} ${addedToCart ? styles.bump : ""}`;
  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAddedToCart(true);
    const timer = setTimeout(() => {
      setAddedToCart(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
