import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../../authentication/auth-page-wrappers/SecurePage';

const DeliveryPerson = dynamic(() => import('../../../modules/Dashboards/DeliveryPerson'), {
  loading: () => <PageLoader />,
});

const DeliveryPersonDashboard = () => (
  <SecurePage>
    <DeliveryPerson />
  </SecurePage>
);

export default  DeliveryPersonDashboard;
