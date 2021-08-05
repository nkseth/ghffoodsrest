import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../../../authentication/auth-page-wrappers/SecurePage';

const DevileryPersonOrders = dynamic(() => import('../../../../modules/Dashboards/DeliveryPerson/ViewDeliveryStatus'), {
  loading: () => <PageLoader />,
});

const DeliveryZoneDashboard = () => (
  <SecurePage>
    <DevileryPersonOrders/>
  </SecurePage>
);

export default DeliveryZoneDashboard;
