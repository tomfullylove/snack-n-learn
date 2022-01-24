import React from 'react';
import Styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Button} from '@components/atoms';

const Container = Styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background.main};
  width: 100%;
  height: 100%;
`;

const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const ButtonContainer = Styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.background.alt}
  height: 32px;
  width: 32px;
`;

const TitleContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = Styled(Ionicons).attrs({
  name: 'car',
  color: colors.text.faint,
  size: 36,
})`
  margin-right: 12px;
`;

const Title = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.bold};
  font-size: 26px;
`;

const ButtonIcon = Styled(Ionicons).attrs({
  name: 'close',
  color: colors.text.active,
  size: 24,
})`
`;

const ContentContainer = Styled.View`
  display: flex;
  flex-grow: 1;
`;

const BottomContainer = Styled.View`
  display: flex;
  padding: 0 24px;
`;

const CarInfo: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TopContainer>
        <TitleContainer>
          <Icon />
          <Title>Car info</Title>
        </TitleContainer>
        <ButtonContainer onPress={() => navigation.goBack()}>
          <ButtonIcon />
        </ButtonContainer>
      </TopContainer>
      <ContentContainer />
      <BottomContainer>
        <Button text="Continue" />
      </BottomContainer>
    </Container>
  );
};

export default CarInfo;
