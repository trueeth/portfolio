import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Foot } from '../foot';
import { Header } from '../header';
import { useDarkMode } from '../../hooks';
import { Spread } from '../switch/styles';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { mode, toggleMode, spread } = useDarkMode();

  const spreadClass = spread === 'first' ? 'growBlack' : spread === 'second' ? 'growWhite' : '';

  return (
    <div>
      <header>
        <Spread className={spreadClass} />
        <Header toggleMode={toggleMode} mode={mode} />
      </header>
      <main style={{ position: 'relative' }}>{children}</main>
      <footer>
        <Foot />
      </footer>
    </div>
  );
};

export { Layout };
