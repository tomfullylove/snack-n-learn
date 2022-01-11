import {configureStore} from '@reduxjs/toolkit';

import {configReducer} from '@state/features';

const store = configureStore({
  reducer: {
    config: configReducer,
  },
});

export default store;
