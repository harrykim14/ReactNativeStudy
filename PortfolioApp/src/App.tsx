
import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '~/Screens/Navigator';
import { LoadingContextProvider } from './Context/Loading';

const App = () => {
  return (
    <LoadingContextProvider>
      <StatusBar barStyle ="light-content"/>
      <Navigator/>
    </LoadingContextProvider>
  );
};


export default App;
