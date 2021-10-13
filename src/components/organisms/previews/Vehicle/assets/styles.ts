import Styled from 'styled-components/native';
import {Pressable} from 'react-native';

import colors from '../../../../../utils/colors';

export const Container = Styled(Pressable)`
  background-color: ${colors.background.main};
  shadow-color: ${colors.text.faint};
  shadow-offset: 0px 3px;
  shadow-opacity: 0.2;
  margin-bottom: 6px;
  aspectRatio: 2;
  width: 248px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  padding: 8px;
`;

export const Image = Styled.Image`
  width: 120px;
  height: 110px;
  resizeMode: contain;
  margin-left: 8px;
`;
