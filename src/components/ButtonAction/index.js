import React from 'react';

import {Button, Container, ButtonName} from './style';

const ButtonAction = ({bgColor, txtColor, label, action}) => {
  return (
    <Container bgColor={bgColor}>
      <Button onPress={action}>
        <ButtonName txtColor={txtColor}>{label}</ButtonName>
      </Button>
    </Container>
  );
};

export default ButtonAction;
