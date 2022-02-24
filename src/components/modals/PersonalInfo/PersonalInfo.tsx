import React from 'react';
import {StyleSheet} from 'react-native';
import Styled from 'styled-components/native';
import {useNavigation, useIsFocused} from '@react-navigation/native';

import {Camera, useCameraDevices} from 'react-native-vision-camera';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Button, AltButton} from '@components/atoms';

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
  name: 'person',
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
  margin: 0 24px 24px;
`;

const BottomContainer = Styled.View`
  display: flex;
  padding: 0 24px 24px;
`;

const Spacer = Styled.View`
  height: 16px;
`;

const PersonalInfo: React.FC = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const devices = useCameraDevices();
  const device = devices.back;
  return (
    <Container>
      <TopContainer>
        <TitleContainer>
          <Icon />
          <Title>Personal info</Title>
        </TitleContainer>
        <ButtonContainer onPress={() => navigation.goBack()}>
          <ButtonIcon />
        </ButtonContainer>
      </TopContainer>
      <ContentContainer>
        {device && (
          <Camera style={styles.camera} device={device} isActive={isFocused} />
        )}
      </ContentContainer>
      <BottomContainer>
        <Button text="Scan driving licence" />
        <Spacer />
        <AltButton text="Enter info manually" />
      </BottomContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    borderRadius: 8,
  },
});

export default PersonalInfo;
