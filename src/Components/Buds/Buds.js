import React, { Fragment } from 'react';

import AvailableBuds from './AvailableBuds';
import BudsSummary from './BudsSummary';

const Buds = () => {
  return (
    <Fragment>
      <BudsSummary />
      <AvailableBuds />
    </Fragment>
  );
};

export default Buds;
