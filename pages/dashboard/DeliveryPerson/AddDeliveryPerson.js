import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../../authentication/auth-page-wrappers/SecurePage';

const AddDevileryPerson = dynamic(() => import('../../../modules/Dashboards/DeliveryPerson/AddDeliveryPerson'), {
  loading: () => <PageLoader />,
});

const DeliveryZoneDashboard = () => (
  <SecurePage>
    <AddDevileryPerson/>
  </SecurePage>
);

export default DeliveryZoneDashboard;
