import styled from 'styled-components';

import { NavItem } from './styles';
import { HeaderItems } from '../../constants';

const HWrapper = styled.div`
  height: 80px,
  width: 100%,
  background-color: white
`;

const Header = () => {
  return (
    <HWrapper>
      <p>Scott Kapun</p>
      {HeaderItems.map((item, index) => (
        <NavItem key={index}>
          <p>{item}</p>
        </NavItem>
      ))}
    </HWrapper>
  );
};

export { Header };
