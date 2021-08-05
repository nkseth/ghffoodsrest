import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../../authentication/auth-page-wrappers/SecurePage';

const Orders = dynamic(() => import('../../../modules/Dashboards/Orders'), {
  loading: () => <PageLoader />,
});

const DeliveryZoneDashboard = () => (
  <SecurePage>
    < Orders />
  </SecurePage>
);

export default DeliveryZoneDashboard;
