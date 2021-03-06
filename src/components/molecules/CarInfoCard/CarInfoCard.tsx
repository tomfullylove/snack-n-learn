import React from 'react';
import Styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

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
  name: 'car',
  color: colors.text.faint,
  size: 28,
})`
  margin-right: 8px;
`;

const Title = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.bold};
  font-size: 16px;
`;

const PersonalInfoCard: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Card onPress={() => navigation.navigate('CarInfo')}>
      <TitleContainer>
        <Icon />
        <Title>Car info</Title>
      </TitleContainer>
      <Button text="Add car" onPress={() => navigation.navigate('CarInfo')} />
    </Card>
  );
};

export default PersonalInfoCard;
