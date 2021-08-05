import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../../authentication/auth-page-wrappers/SecurePage';

const AddOrders = dynamic(() => import('../../../modules/Dashboards/Orders/AddOrder'), {
  loading: () => <PageLoader />,
});

const DeliveryZoneDashboard = () => (
  <SecurePage>
    < AddOrders />
  </SecurePage>
);

export default DeliveryZoneDashboard;
