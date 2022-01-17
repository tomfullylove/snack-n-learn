import React from 'react';
import Styled from 'styled-components/native';

import colors from '@utils/colors';

import {Card} from '@components/atoms';

const Container = Styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
})`
  display: flex;
  background-color: ${colors.background.sub};
`;

const Screen: React.FC = () => {
  return (
    <Container>
      <Card />
    </Container>
  );
};

export default Screen;
