import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  height: 40px;
  padding: 0 18px 0 16px;
  background-color: ${colors.background.main};
  border-radius: 8px;
  shadow-color: ${colors.text.faint};
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
`;

export const Text = Styled.Text`
  font-family: Lato;
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.text.main};
`;

export const Subtext = Styled.Text`
  font-family: Lato;
  margin-left: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.text.sub};
`;
