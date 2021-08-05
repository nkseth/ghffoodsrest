import React from 'react';

import { CryptoCard } from '../../../../@jumbo/components/Common';
import RippleGraph from './TotalOrdersGraph';

const RipplePurchaseHistory = () => {
  return (
    <CryptoCard title="Total Orders" amount="50" progress={{ value: '-8%', icon: 'info', color: '#E00930' }}>
      <RippleGraph />
    </CryptoCard>
  );
};

export default RipplePurchaseHistory;
