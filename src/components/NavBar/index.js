import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, LinkButton, MenuIcon} from './style';

const NavBar = ({home, day, add, past, next}) => {
  const navigation = useNavigation();
  const handlePress = page => {
    navigation.navigate(page);
  };
  return (
    <Container>
      <LinkButton onPress={() => handlePress('Resumo Financeiro')}>
        <MenuIcon
          source={require('../../assets/icons/home.png')}
          active={home}
        />
      </LinkButton>
      <LinkButton onPress={() => handlePress('Pagamentos Futuros')}>
        <MenuIcon
          source={require('../../assets/icons/next.png')}
          active={next}
        />
      </LinkButton>
      <LinkButton onPress={() => handlePress('Novo Cliente')}>
        <MenuIcon source={require('../../assets/icons/add.png')} active={add} />
      </LinkButton>

      <LinkButton onPress={() => handlePress('Pagamentos Atrasados')}>
        <MenuIcon
          source={require('../../assets/icons/past.png')}
          active={past}
        />
      </LinkButton>
      <LinkButton onPress={() => handlePress('Vencimentos Recebidos')}>
        <MenuIcon source={require('../../assets/icons/day.png')} active={day} />
      </LinkButton>
    </Container>
  );
};

export default NavBar;
