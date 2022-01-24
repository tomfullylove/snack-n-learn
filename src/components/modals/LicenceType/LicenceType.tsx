import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Styled from 'styled-components/native';

import Modal from 'react-native-modal';
import CardFlip from 'react-native-card-flip';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Card, Button} from '@components/atoms';

import {Selector} from '@components/molecules';

const licenceTypes = [
  {id: 'ukp', label: 'Provisional GB'},
  {id: 'ukm', label: 'Full GB'},
];

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

const SelectorCard = Styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${colors.background.main};
  padding: 16px;
  margin-top: 16px;

  shadow-color: ${colors.shadow.background};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;

  opacity: 0.5;
`;

const SelectorContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.bold};
  font-size: 14px;
`;

const Circle = Styled.View`
  height: 16px;
  width: 16px
  border-radius: 8px
  border: 2px solid ${colors.text.success};
`;

const Label = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.text.active}
  border-radius: 4px;
  padding: 2px 4px;
  margin-left: 6px;
`;

const LabelText = Styled.Text`
  color: ${colors.background.main};
  font-family: ${fonts.main.bold};
  font-size: 10px;
`;

interface Props {
  show: boolean;
  close: () => void;
}

const LicenceType: React.FC<Props> = ({show, close}) => {
  const [selectorValue, setSelectorValue] = useState(licenceTypes[1].id);
  return (
    <Modal
      propagateSwipe
      isVisible={show}
      style={styles.modal}
      swipeDirection="down"
      onSwipeComplete={close}>
      <Wrapper>
        <Card>
          <Title>What type of licence do you have?</Title>
          <Selector
            items={licenceTypes}
            value={selectorValue}
            onPress={setSelectorValue}
          />
          <CardFlip
            style={styles.cardContainer}
            ref={licenceCard => (this.licenceCard = licenceCard)}>
            <SelectorCard
              onPress={() =>
                this.licenceCard.jiggle({
                  count: 2,
                  duration: 100,
                  progress: 0.05,
                })
              }>
              <SelectorContainer>
                <Text>Starfleet 🚀</Text>
                <Label>
                  <LabelText>Coming "soon"</LabelText>
                </Label>
              </SelectorContainer>
              <Circle />
            </SelectorCard>
            <></>
          </CardFlip>
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
  cardContainer: {
    height: 100,
  },
});

export default LicenceType;
