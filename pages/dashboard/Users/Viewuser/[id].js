import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../../../authentication/auth-page-wrappers/SecurePage';

const EditDevileryPerson = dynamic(() => import('../../../../modules/Dashboards/Users/Viewuser/table'), {
  loading: () => <PageLoader />,
});

const DeliveryZoneDashboard = () => (
  <SecurePage>
    <EditDevileryPerson/>
  </SecurePage>
);

export default DeliveryZoneDashboard;
