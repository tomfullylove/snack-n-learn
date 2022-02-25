import React, {useState} from 'react';
import Styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Card, Button} from '@components/atoms';

import {EndDate} from '@components/modals';

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
  const [showEndDateModal, toggleEndDateModal] = useState(false);
  return (
    <>
      <Card onPress={() => toggleEndDateModal(true)}>
        <Container>
          <TitleContainer>
            <Icon />
            <Title>End date</Title>
          </TitleContainer>
          <Button text="Select date" onPress={() => toggleEndDateModal(true)} />
        </Container>
      </Card>
      <EndDate
        show={showEndDateModal}
        close={() => toggleEndDateModal(false)}
      />
    </>
  );
};

export default EndDateCard;
