import React, {useState} from 'react';
import Styled from 'styled-components/native';

import SegmentedControl from '@react-native-segmented-control/segmented-control';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Button} from '@components/atoms';

import {
  ProductCards,
  EndDateCard,
  CarInfoCard,
  PersonalInfoCard,
  LicenceTypeCard,
  Selector,
} from '@components/molecules';

const Container = Styled.SafeAreaView`
  display: flex;
  height: 100%;
  background-color: ${colors.background.sub};
`;

const OptionsContainer = Styled.View`
  padding: 8px 24px;
  background-color: ${colors.background.sub};
`;

const ContentContainer = Styled.ScrollView.attrs({
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

const QuestionContainer = Styled.View`
  padding: 24px 0 16px;;
`;

const QuestionText = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.bold};
  font-size: 14px;
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

const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;

const SectionInfo = Styled.View`
`;

const Screen: React.FC = () => {
  const [selectorValue, setSelectorValue] = useState('now');
  return (
    <Container>
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
      <ContentContainer>
        <ProductCards />
        <QuestionContainer>
          <QuestionText>When do you want your insurance to start?</QuestionText>
        </QuestionContainer>
        <Selector
          horizontal
          items={[
            {id: 'now', label: 'Now'},
            {id: 'later', label: 'Later'},
          ]}
          value={selectorValue}
          onPress={setSelectorValue}
        />
        <Spacer />
        <EndDateCard />
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
        <LicenceTypeCard />
        <Spacer />
        <PersonalInfoCard />
      </ContentContainer>
      <BottomContainer>
        <SectionInfo />
        <Button text="Pay" />
      </BottomContainer>
    </Container>
  );
};

export default Screen;
