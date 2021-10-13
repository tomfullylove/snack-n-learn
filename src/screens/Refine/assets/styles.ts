import Styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../utils/colors';

export const PageContainer = Styled.SafeAreaView`
  background-color: ${colors.background.main};
  height: 100%;
`;

export const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
`;

export const CloseIcon = Styled(Ionicons).attrs({
  name: 'close-outline',
  color: colors.text.main,
  size: 32,
})``;

export const ScrollContainer = Styled.ScrollView`
  display: flex;
  flex-direction: column;
`;
