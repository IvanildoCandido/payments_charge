import React from 'react';

import {Container, MenuIcon} from './style';

const NavBar = () => {
  return (
    <Container>
      <MenuIcon source={require('../../assets/icons/home.png')} active={true} />
      <MenuIcon
        source={require('../../assets/icons/next.png')}
        active={false}
      />
      <MenuIcon source={require('../../assets/icons/add.png')} active={false} />
      <MenuIcon
        source={require('../../assets/icons/past.png')}
        active={false}
      />
      <MenuIcon source={require('../../assets/icons/day.png')} active={false} />
    </Container>
  );
};

export default NavBar;
