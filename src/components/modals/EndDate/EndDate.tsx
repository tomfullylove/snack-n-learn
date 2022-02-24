import React from 'react';
import {requireNativeComponent, StyleSheet} from 'react-native';
import Styled from 'styled-components/native';

import Modal from 'react-native-modal';

import {Card, Button} from '@components/atoms';

const SwiftUIDatePicker = requireNativeComponent('SwiftUIDatePicker');

const Wrapper = Styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 24px;
`;

const CalenderContainer = Styled.View`
  height: 390px;
  margin: -20px 0 -20px;
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
          {/* <Title>When do you want your insurance to end?</Title> */}
          <CalenderContainer>
            <SwiftUIDatePicker style={styles.container} />
          </CalenderContainer>
          <Button text="Pick end date" onPress={close} />
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
