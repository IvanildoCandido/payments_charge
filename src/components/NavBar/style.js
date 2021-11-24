import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;
export const MenuIcon = styled.Image`
  height: 50px;
  opacity: ${props => (props.active === true ? 1 : 0.25)};
  width: 50px;
`;
export const LinkButton = styled.TouchableOpacity`
  
`;
