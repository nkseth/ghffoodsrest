import React from 'react';
import { CryptoCard } from '../../../../@jumbo/components/Common';

import LitecoinGraph from './TotalEarningsGraph';

const LitecoinPurchaseHistory = () => {
  return (
    <CryptoCard title="Total Earnings" amount="$9,626" progress={{ value: '-1.4%', icon: 'info', color: '#E00930' }}>
      <LitecoinGraph />
    </CryptoCard>
  );
};

export default LitecoinPurchaseHistory;
