import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { useDarkMode } from './hooks';
import { Layout } from './components';
import GlobalStyles from './theming/global';
import lightTheme, { darkTheme } from './theming/themeContext';
import { EA1, Movie, Landing, VulnPage, DevopsPage } from './pages';

const App = () => {
  const { mode } = useDarkMode();

  console.log(mode);

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/vuln" element={<VulnPage />} />
            <Route path="/devops" element={<DevopsPage />} />
            <Route path="/ea1" element={<EA1 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export { App };
