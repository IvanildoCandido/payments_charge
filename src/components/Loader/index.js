import * as React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../services/colors';
import {Container} from './style';

const Loader = () => (
  <Container>
    <ActivityIndicator animating={true} color={colors.royalblue} size="large" />
  </Container>
);

export default Loader;
