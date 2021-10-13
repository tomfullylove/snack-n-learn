import {configureStore} from '@reduxjs/toolkit';

import {configReducer, vehiclesReducer} from './features';

const store = configureStore({
  reducer: {
    config: configReducer,
    vehicles: vehiclesReducer,
  },
});

export default store;
