import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../../../authentication/auth-page-wrappers/SecurePage';

const DevileryZoneArea = dynamic(() => import('../../../../modules/Dashboards/DeliveryZone/DeliverZoneArea'), {
  loading: () => <PageLoader />,
});

const DeliveryZoneDashboard = () => (
  <SecurePage>
    <DevileryZoneArea/>
  </SecurePage>
);

export default DeliveryZoneDashboard;
