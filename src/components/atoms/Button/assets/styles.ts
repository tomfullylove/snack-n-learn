import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${colors.text.main};
  border-radius: 8px;
  padding: 0 20px;
  shadow-color: ${colors.text.faint};
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
`;

export const Text = Styled.Text`
  font-family: Lato;
  font-size: 14px;
  color: ${colors.background.main};
  font-weight: 700;
`;
