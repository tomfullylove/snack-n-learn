import {configureStore} from '@reduxjs/toolkit';

import {configReducer} from './features';

const store = configureStore({
  reducer: {
    config: configReducer,
  },
});

export default store;
