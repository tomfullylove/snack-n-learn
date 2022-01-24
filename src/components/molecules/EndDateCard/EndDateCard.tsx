import React from 'react';
import Styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Card, Button} from '@components/atoms';

const Container = Styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

const Icon = Styled(Ionicons).attrs({
  name: 'calendar',
  color: colors.text.faint,
  size: 24,
})`
  margin-right: 8px;
`;

const Title = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.bold};
  font-size: 16px;
`;

const EndDateCard: React.FC = () => {
  return (
    <>
      <Card>
        <Container>
          <TitleContainer>
            <Icon />
            <Title>End date</Title>
          </TitleContainer>
          <Button text="Pick date" />
        </Container>
      </Card>
    </>
  );
};

export default EndDateCard;
