import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {Provider} from 'react-redux';
import AppRoute from './constants/AppRoutes';
import {store} from './store';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </ApplicationProvider>
);
