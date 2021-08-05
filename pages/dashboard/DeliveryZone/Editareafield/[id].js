import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../../../authentication/auth-page-wrappers/SecurePage';

const DevileryZoneEdit = dynamic(() => import('../../../../modules/Dashboards/DeliveryZone/DeliveryZoneEdit'), {
  loading: () => <PageLoader />,
});

const DeliveryZoneDashboard = () => (
  <SecurePage>
    <DevileryZoneEdit/>
  </SecurePage>
);

export default DeliveryZoneDashboard;
