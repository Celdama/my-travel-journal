import React from 'react';
import { Wrapper, Content } from './Header.styles';
import Logo from './logo.svg';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <img src={Logo} alt='world-logo' />
        <h3>my travel journal.</h3>
      </Content>
    </Wrapper>
  );
};
export default Header;
