import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import AppRoute from './constants/AppRoutes';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <AppRoute />
  </ApplicationProvider>
);
