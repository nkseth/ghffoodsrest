import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../../authentication/auth-page-wrappers/SecurePage';

const DeliveryZone = dynamic(() => import('../../../modules/Dashboards/DeliveryZone'), {
  loading: () => <PageLoader />,
});

const DeliveryZoneDashboard = () => (
  <SecurePage>
    <DeliveryZone />
  </SecurePage>
);

export default DeliveryZoneDashboard;
