import React from 'react';
import {StyleSheet} from 'react-native';
import Styled from 'styled-components/native';

import SegmentedControl from '@react-native-segmented-control/segmented-control';
import CardFlip from 'react-native-card-flip';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Card} from '@components/atoms';

const OptionsContainer = Styled.View`
  padding: 0 24px;
  background-color: ${colors.background.sub};
`;

const Container = Styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 40,
    paddingRight: 24,
    paddingLeft: 24,
  },
})`
  display: flex;
  background-color: ${colors.background.sub};
`;

const ProductCard = Styled(Card)`
  height: 200px;
`;

const Spacer = Styled.View`
  height: 40px;
`;

const Text = Styled.Text``;

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
          onChange={() => this.card.flip()}
        />
      </OptionsContainer>
      <Container>
        <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
          <ProductCard>
            <Text>Short-term</Text>
          </ProductCard>
          <ProductCard>
            <Text>Subscription</Text>
          </ProductCard>
        </CardFlip>
        <Spacer />
        <Card />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
  },
});

export default Screen;
