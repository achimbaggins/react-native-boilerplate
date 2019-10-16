import React, {useState} from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import {Router,DirectNavigate} from './src/navigations';
import AppControllers from './src/controllers'

const App = () => {
  return (
    <Provider store={store}>
        <AppControllers/>
    </Provider>
  );
};

export default App;
