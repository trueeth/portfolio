import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Foot } from '../foot';
import { Header } from '../header';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
};

export { Layout };
