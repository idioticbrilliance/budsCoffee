import React from 'react';

import styles from './BudsSummary.module.css';

const BudsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Fresh Aromatic Coffee Delivered to you!</h2>
      <p>
        Enjoy a simple, but diverse collection of award winning imported
        vietnamese coffee. Our coffee has been tested in labs for purity, vetted
        by experts and loved by our customers.
      </p>

      <p>
        For a limited time, we are shipping to you for FREE! Speak with a
        representative today!
      </p>
    </section>
  );
};

export default BudsSummary;
