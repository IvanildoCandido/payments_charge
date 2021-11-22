import styled from 'styled-components';
import {colors} from '../../services/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;
export const LeftBar = styled.View`
  background-color: ${props => props.color};
  flex: 0.5;
  height: 100%;
  width: 15px;
`;
export const InfoText = styled.Text`
  background-color: white;
  color: ${colors.black};
  flex: 3;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  text-align: left;
`;
export const ServicesCount = styled.Text`
  background-color: ${props => props.color};
  color: ${props => props.colorCount};
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
`;
export const TotalInfo = styled.Text`
  background-color: white;
  color: ${colors.black};
  flex: 2;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
`;
