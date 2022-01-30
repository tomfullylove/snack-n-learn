import React from 'react';
import {requireNativeComponent, StyleSheet} from 'react-native';
import Styled from 'styled-components/native';

import Modal from 'react-native-modal';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Card, Button} from '@components/atoms';

const SwiftUIButton = requireNativeComponent('SwiftUIButton');

const Wrapper = Styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 24px;
`;

const Title = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.bold};
  font-size: 16px;
  margin-bottom: 16px;
`;

interface Props {
  show: boolean;
  close: () => void;
}

const EndDate: React.FC<Props> = ({show, close}) => {
  return (
    <Modal
      isVisible={show}
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={close}>
      <Wrapper>
        <Card>
          <Title>When do you want your insurance to end?</Title>
          <SwiftUIButton style={styles.container} />
          <Button text="Continue" onPress={close} />
        </Card>
      </Wrapper>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EndDate;
