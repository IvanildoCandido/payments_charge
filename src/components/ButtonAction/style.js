import styled from 'styled-components';

export const Container = styled.View`
  background-color: ${props => props.bgColor};
  border-radius: 15px;
  margin: 5px;
  flex: 1;
  padding: 12px;
`;
export const Button = styled.TouchableOpacity``;
export const ButtonName = styled.Text`
  color: ${props => props.txtColor};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
