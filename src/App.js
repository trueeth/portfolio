import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { useDarkMode } from './hooks';
import GlobalStyles from './theming/global';
import lightTheme, { darkTheme } from './theming/themeContext';
import { EA1, Movie, Landing, VulnPage, AppWrapper, DevopsPage } from './pages';

const App = () => {
  const [mode, toggleMode, spread, componentMounted, setDisableScroll] = useDarkMode();
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AppWrapper>
                <Landing
                  setDisableScroll={setDisableScroll}
                  spread={spread}
                  mode={mode}
                  toggleMode={toggleMode}
                />
              </AppWrapper>
            }
          />
          <Route
            path="/movie"
            element={
              <AppWrapper>
                <Movie spread={spread} mode={mode} toggleMode={toggleMode} />
              </AppWrapper>
            }
          />
          <Route
            path="/vuln"
            element={
              <AppWrapper>
                <VulnPage spread={spread} mode={mode} toggleMode={toggleMode} />
              </AppWrapper>
            }
          />
          <Route
            path="/devops"
            element={
              <AppWrapper>
                <DevopsPage spread={spread} mode={mode} toggleMode={toggleMode} />
              </AppWrapper>
            }
          />

          <Route
            path="/ea1"
            element={
              <AppWrapper>
                <EA1 spread={spread} mode={mode} toggleMode={toggleMode} />
              </AppWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export { App };
