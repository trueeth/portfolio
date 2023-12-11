import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { useDarkMode } from './hooks';
import { Layout } from './components';
import GlobalStyles from './theming/global';
import lightTheme, { darkTheme } from './theming/themeContext';
import { EA1, Movie, Landing, VulnPage, DevopsPage } from './pages';

const App = () => {
  const [mode, toggleMode, spread, componentMounted, setDisableScroll] = useDarkMode();
  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Landing
                  setDisableScroll={setDisableScroll}
                  spread={spread}
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            />
            <Route
              path="/movie"
              element={<Movie spread={spread} mode={mode} toggleMode={toggleMode} />}
            />
            <Route
              path="/vuln"
              element={<VulnPage spread={spread} mode={mode} toggleMode={toggleMode} />}
            />
            <Route
              path="/devops"
              element={<DevopsPage spread={spread} mode={mode} toggleMode={toggleMode} />}
            />

            <Route
              path="/ea1"
              element={<EA1 spread={spread} mode={mode} toggleMode={toggleMode} />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export { App };
