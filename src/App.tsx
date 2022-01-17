import React from 'react';
import {Provider} from 'react-redux';

import store from '@state/state';
import RootNavigator from '@navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
