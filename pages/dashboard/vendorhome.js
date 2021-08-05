import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../authentication/auth-page-wrappers/SecurePage';
import { Grid } from '@material-ui/core';

const Vendorhome = dynamic(() => import('../../modules/Dashboards/Crypto'), {
  loading: () => <PageLoader />,
});

const CryptoDashboard = () => (
  <SecurePage>
    
    <Grid container style={{width:'100%',marginBottom:'70px'}}>
    <Vendorhome />
    </Grid>
    
  </SecurePage>
);

export default CryptoDashboard;
