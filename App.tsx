import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './src/navigations/AuthNavigation';
import {AppProvider, useAppContext} from './src/theme/AppContext';
import {LightTheme, DarkTheme} from './src/theme/Theme';

const AppContent = () => {
  const {isDarkMode} = useAppContext();

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
      <StatusBar
        backgroundColor={
          isDarkMode
            ? DarkTheme.colors.background
            : LightTheme.colors.background
        }
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <AuthNavigation />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
