import React, {useRef, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import Styled from 'styled-components/native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import MlkitOcr from 'react-native-mlkit-ocr';

import {Camera, useCameraDevices} from 'react-native-vision-camera';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Button, AltButton, LicenceSkeleton} from '@components/atoms';

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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
  margin: 0 24px 24px;
`;

const BottomContainer = Styled.View`
  display: flex;
  padding: 0 24px 24px;
`;

const SkeletonContainer = Styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const CaptureButton = Styled.Pressable`
  position: absolute;
  bottom: 48px;

  border-radius: 40px;
  height: 64px;
  width: 64px;

  border: 6px solid ${colors.background.main};
`;

const PersonalInfo: React.FC = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const camera = useRef<Camera>(null);

  const devices = useCameraDevices();
  const device = devices.back;

  const takePhoto = useCallback(async () => {
    if (camera.current == null) {
      throw new Error('Camera ref is null!');
    }

    const photo = await camera.current.takePhoto();

    const result = await MlkitOcr.detectFromFile(`${photo.path}`);

    result.map((block) => {
      block.lines.map((line) => {
        console.log(line.text);
      });
    });

    console.log('Done!');
  }, [camera]);

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
          <>
            <Camera
              ref={camera}
              style={styles.camera}
              device={device}
              isActive={isFocused}
              photo={true}
            />
            <SkeletonContainer>
              <LicenceSkeleton />
            </SkeletonContainer>
            <CaptureButton
              onPress={() => {
                takePhoto();
              }}
            />
          </>
        )}
      </ContentContainer>
      <BottomContainer>
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
