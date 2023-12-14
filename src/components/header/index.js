import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Logo } from '../logo';
import { Switch } from '../switch';
import { NavCont } from './styles';
import { Midi } from '../../theming/styles';

const Header = ({ toggleMode, mode }) => {
  const navigate = useNavigate();
  return (
    <Midi style={{ mixBlendMode: 'difference' }}>
      <NavCont>
        <Link
          to="/"
          aria-current="page"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              navigate(`/`);
            }
          }}
        >
          <Logo
            style={{
              position: 'relative',
              display: 'block',
            }}
          />
        </Link>
        <Switch mode={mode} toggleMode={toggleMode} />
      </NavCont>
    </Midi>
  );
};

export { Header };
