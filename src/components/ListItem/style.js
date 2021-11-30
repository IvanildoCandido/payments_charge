import styled from 'styled-components';
import {colors} from '../../services/colors';

export const Container = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const DataInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;
export const BoxDate = styled.View`
  align-items: center;
  background-color: ${colors.sandybrown};
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  width: 50px;
`;
export const DateText = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
`;
export const DayText = styled.Text`
  color: ${colors.black};
  font-size: 12px;
`;
export const InfoArea = styled.View`
  margin-left: 10px;
`;
export const ServiceText = styled.Text`
  color: ${colors.lightgray};
`;
export const ClientText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.black};
`;
export const StatusText = styled.Text`
  color: ${colors.deepskyblue};
`;
export const PriceInfo = styled.Text`
  color: ${colors.royalblue};
  font-size: 18px;
  font-weight: bold;
`;
