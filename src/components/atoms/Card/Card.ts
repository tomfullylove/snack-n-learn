import Styled from 'styled-components/native';

import colors from '@utils/colors';

interface Props {
  color?: string;
}

const Card = Styled.Pressable<Props>`
  display: flex;
  border-radius: 8px;
  background-color: ${({color}) => color || colors.background.main};
  padding: 24px;

  shadow-color: ${colors.shadow.background};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
`;

export default Card;
