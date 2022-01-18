import React, {useState} from 'react';
import Styled from 'styled-components/native';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

interface CardProps {
  marginBottom: boolean;
}

interface CircleProps {
  fill: boolean;
}

const Container = Styled.View`
  display: flex;
  flex-direction: column;
`;

const Card = Styled.Pressable<CardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${colors.background.main};
  padding: 16px;

  shadow-color: ${colors.shadow.background};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;

  ${({marginBottom}) => marginBottom && 'margin-bottom: 16px;'}

  ${({fill}) => fill && `background-color: ${colors.background.success}`}
`;

const Text = Styled.Text`
  color: ${colors.text.main};
  font-family: ${fonts.main.semiBold};
  font-size: 14px;
`;

const Circle = Styled.View<CircleProps>`
  height: 16px;
  width: 16px
  border-radius: 8px
  border: 2px solid ${colors.text.success};

  ${({fill}) => fill && `background-color: ${colors.text.success}`}
`;

type SelectorItem = {
  id: string;
  label: string;
};

interface Props {
  items: Array<SelectorItem>;
  value: string;
  onPress: any;
}

const Selector: React.FC<Props> = ({items, value, onPress}) => {
  return (
    <Container>
      {items.map((item: SelectorItem, index: number) => (
        <Card
          key={`selector-item-${item.id}`}
          marginBottom={index !== items.length - 1}
          fill={item.id === value}
          onPress={() => onPress(item.id)}>
          <Text>{item.label}</Text>
          <Circle fill={item.id === value} />
        </Card>
      ))}
    </Container>
  );
};

export default Selector;
