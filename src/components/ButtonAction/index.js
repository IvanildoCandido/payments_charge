import React from 'react';

import {Button, Container, ButtonName} from './style';

const ButtonAction = ({bgColor, txtColor, label}) => {
  return (
    <Container bgColor={bgColor}>
      <Button>
        <ButtonName txtColor={txtColor}>{label}</ButtonName>
      </Button>
    </Container>
  );
};

export default ButtonAction;
