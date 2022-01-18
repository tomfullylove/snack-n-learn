import React, {useState} from 'react';
import Styled from 'styled-components/native';

import SegmentedControl from '@react-native-segmented-control/segmented-control';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {
  ProductCards,
  CarInfoCard,
  PersonalInfoCard,
  LicenceTypeCard,
} from '@components/molecules';

const OptionsContainer = Styled.View`
  padding: 8px 24px;
  background-color: ${colors.background.sub};
`;

const Container = Styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 24,
    paddingRight: 24,
    paddingLeft: 24,
    paddingBottom: 24,
  },
})`
  display: flex;
  background-color: ${colors.background.sub};
`;

const SubTitleContainer = Styled.View`
  display: flex;
  flex-direction: column;
  padding: 48px 0 24px;
`;

const SubTitle = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.bold};
  font-size: 16px;
  margin-bottom: 6px;
`;

const Text = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.regular};
  font-size: 13px;
`;

const Spacer = Styled.View`
  height: 32px;
`;

const Screen: React.FC = () => {
  return (
    <>
      <OptionsContainer>
        <SegmentedControl
          values={['Short-term', 'Subscription']}
          selectedIndex={0}
          fontStyle={{
            color: colors.text.main,
            fontFamily: fonts.main.semiBold,
          }}
          onChange={() => this.productCard.flip()}
        />
      </OptionsContainer>
      <Container>
        <ProductCards />
        <SubTitleContainer>
          <SubTitle>Car details</SubTitle>
          <Text>Mixtape tousled celiac af gastropub.</Text>
        </SubTitleContainer>
        <CarInfoCard />
        <SubTitleContainer>
          <SubTitle>Your details</SubTitle>
          <Text>
            Everyday carry kombucha fashion axe cliche shabby chic. Slow-carb
            pour-over jean shorts
          </Text>
        </SubTitleContainer>
        <PersonalInfoCard />
        <Spacer />
        <LicenceTypeCard />
      </Container>
    </>
  );
};

export default Screen;
