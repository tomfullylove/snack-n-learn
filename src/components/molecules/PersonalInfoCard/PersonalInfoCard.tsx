import React from 'react';
import Styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

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
  name: 'person',
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
  const navigation = useNavigation();
  return (
    <Card onPress={() => navigation.navigate('PersonalInfo')}>
      <TitleContainer>
        <Icon />
        <Title>Personal info</Title>
      </TitleContainer>
      <Image source={Licence} />
      <Text>
        Chillwave coloring book VHS, retro taxidermy glossier live-edge
      </Text>
      <Button
        text="Add your info"
        onPress={() => navigation.navigate('PersonalInfo')}
      />
    </Card>
  );
};

export default PersonalInfoCard;
