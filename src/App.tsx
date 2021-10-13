import React from 'react';
import {Provider} from 'react-redux';
import {enableScreens} from 'react-native-screens';

import store from './state';
import RootNavigator from './navigation/RootNavigator';

enableScreens();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
