import React from 'react';

import Card from '../UI/Card';
import styles from './AvailableBuds.module.css';
import BudItem from './BudItem/BudItem';

const COFFEE_SELECTION = [
  {
    id: "b1",
    name: "Americano Black Coffee",
    description: "No milk, no sugar, just some ole' black arabia gold",
    price: 1.99,
  },
  {
    id: "b2",
    name: "Espresso Extremo",
    description: "Life is fast, I need energy and I need it now.",
    price: 2.49,
  },
  {
    id: "b3",
    name: "Capuccino infantino bombino",
    description:
      "#1 seller, milk from cows raised near Lake Minatonka. 100% arabia coffee blend.",
    price: 1.99,
  },
  {
    id: "b4",
    name: "Hot Chocolate'ay",
    description:
      "It's not always about caffeiene. Feel the lush from the chocolate aroma.",
    price: 0.99,
  },
];

const AvailableBuds = () => {
  const menuList = COFFEE_SELECTION.map((cafe) => (
    <BudItem
      id={cafe.id}
      key={cafe.id}
      name={cafe.name}
      price={cafe.price}
      description={cafe.description}
    />
  ));
  return (
    <section className={styles.buds}>
      <Card>
        <ul>{menuList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBuds;
