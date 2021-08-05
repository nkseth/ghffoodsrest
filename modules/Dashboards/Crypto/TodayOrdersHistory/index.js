import React from 'react';
import { CryptoCard } from '../../../../@jumbo/components/Common';
import BitcoinGraph from './OrderGraph';

const BitcoinPurchaseHistory = () => {
  return (
    <CryptoCard title="Today`s Orders" amount="26" progress={{ value: '23%', icon: 'info', color: '#8DCD03' }}>
      <BitcoinGraph />
    </CryptoCard>
  );
};

export default BitcoinPurchaseHistory;
