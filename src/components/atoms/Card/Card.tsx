import React from 'react';
import Styled from 'styled-components/native';

import colors from '@utils/colors';

const Card = Styled.View`
  display: flex;
  border-radius: 8px;
  background-color: ${colors.background.main};
  padding: 24px;

  shadow-color: ${colors.shadow};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
`;

export default Card;
