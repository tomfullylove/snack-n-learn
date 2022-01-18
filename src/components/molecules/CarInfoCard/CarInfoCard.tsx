import React from 'react';
import Styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Card, Button} from '@components/atoms';

const TitleContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

const Icon = Styled(Ionicons).attrs({
  name: 'car-outline',
  color: colors.text.faint,
  size: 28,
})`
  margin-right: 4px;
`;

const Title = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.bold};
  font-size: 16px;
`;

const PersonalInfoCard: React.FC = () => {
  return (
    <Card>
      <TitleContainer>
        <Icon />
        <Title>Car info</Title>
      </TitleContainer>
      <Button text="Add a car" />
    </Card>
  );
};

export default PersonalInfoCard;
