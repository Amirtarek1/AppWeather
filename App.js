import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import SignupPage from './src/screens/Auth/SignupPage';
import MainNavigation from './src/navigation/MainNavigation';



const App = () => {

  return (
    <>
   
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Provider>

    </>
  );
};

export default App;
