import React from 'react';
import Styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Licence from '@assets/licence.png';

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
  name: 'person-outline',
  color: colors.text.faint,
  size: 24,
})`
  margin-right: 4px;
`;

const Title = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.bold};
  font-size: 16px;
`;

const Image = Styled.Image`
  height: 80px;
  width: 120px;
  margin-bottom: 16px;
  align-self: center;
`;

const Text = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.regular};
  font-size: 12px;
  text-align: center;
  margin: 0 16px 24px;
`;

const PersonalInfoCard: React.FC = () => {
  return (
    <Card>
      <TitleContainer>
        <Icon />
        <Title>Personal info</Title>
      </TitleContainer>
      <Image source={Licence} />
      <Text>
        Chillwave coloring book VHS, retro taxidermy glossier live-edge
      </Text>
      <Button text="Add your info" />
    </Card>
  );
};

export default PersonalInfoCard;
