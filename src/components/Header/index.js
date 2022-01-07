import React from 'react';
import { Wrapper, Content } from './Header.styles';
import EarthIcon from './icon.svg';

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <img src={EarthIcon} alt='earth-icon' />
        <h3>my travel journal.</h3>
      </Content>
    </Wrapper>
  );
};
export default Header;
