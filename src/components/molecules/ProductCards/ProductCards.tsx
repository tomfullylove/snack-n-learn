import React from 'react';
import {StyleSheet} from 'react-native';
import Styled from 'styled-components/native';

import CardFlip from 'react-native-card-flip';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import {Button} from '@components/atoms';

const Card = Styled.ImageBackground`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  padding: 24px;

  shadow-color: ${colors.shadow.background};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;

  height: 200px;
`;

const InfoContainer = Styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = Styled.Text`
  color: ${colors.background.main};
  font-family: ${fonts.main.bold};
  font-size: 18px;
  margin-bottom: 8px;
`;

const Text = Styled.Text`
  color: ${colors.background.main};
  font-family: ${fonts.main.regular};
  font-size: 14px;
  text-align: center;
`;

const ProductCards: React.FC = () => {
  return (
    <CardFlip
      style={styles.cardContainer}
      ref={productCard => (this.productCard = productCard)}>
      <Card source={require('@assets/background-2.png')}>
        <InfoContainer>
          <Title>Short-term</Title>
          <Text>
            Prism craft beer leggings, microdosing keffiyeh four loko
            dreamcatcher heirloom green
          </Text>
        </InfoContainer>
        <Button text="Pick a duration" />
      </Card>
      <Card source={require('@assets/background-1.png')}>
        <InfoContainer>
          <Title>Subscription</Title>
          <Text>
            Chillwave coloring book VHS, retro taxidermy glossier live-edge poke
            before they sold
          </Text>
        </InfoContainer>
      </Card>
    </CardFlip>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
  },
});

export default ProductCards;
