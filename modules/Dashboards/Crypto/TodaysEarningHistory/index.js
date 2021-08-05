import React from 'react';

import { CryptoCard } from '../../../../@jumbo/components/Common';
import EtheriumGraph from './TodaysEarningGraph';

const EtheriumPurchaseHistory = () => {
  return (
    <CryptoCard title="Today's Earning" amount="$ 9,626" progress={{ value: '0.7%', icon: 'info', color: '#8DCD03' }}>
      <EtheriumGraph />
    </CryptoCard>
  );
};

export default EtheriumPurchaseHistory;
