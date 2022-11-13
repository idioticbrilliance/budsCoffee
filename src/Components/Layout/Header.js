import React, { Fragment } from 'react';

import BudsCoffee from '../../assets/BudsCoffeeBackgroundImg.png';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Bud's Coffee</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={BudsCoffee} alt="buds-coffee" />
      </div>
    </Fragment>
  );
};

export default Header;
