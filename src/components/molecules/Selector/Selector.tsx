import React, {useState} from 'react';
import Styled from 'styled-components/native';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

interface ContainerProps {
  horizontal: boolean;
}

interface CardProps {
  margin: boolean;
  horizontal: boolean;
}

interface TextProps {
  slected: boolean;
}

interface CircleProps {
  fill: boolean;
}

const Container = Styled.View<ContainerProps>`
  display: flex;
  width: 100%;
  flex-direction: ${({horizontal}) => (horizontal ? 'row' : 'column')};
`;

const Card = Styled.Pressable<CardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${colors.background.main};
  padding: 16px;

  shadow-color: ${({fill}) =>
    fill ? colors.shadow.success : colors.shadow.background};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;

  ${({horizontal}) => horizontal && 'flex: 1;'}
  ${({margin, horizontal}) =>
    margin && `margin-${horizontal ? 'right' : 'bottom'}: 16px;`}

  ${({fill}) => fill && `background-color: ${colors.background.success}`}
`;

const Text = Styled.Text<TextProps>`
  color: ${({selected}) => (selected ? colors.text.success : colors.text.main)};
  font-family: ${fonts.main.bold};
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
  horizontal?: boolean;
}

const Selector: React.FC<Props> = ({items, value, onPress, horizontal}) => {
  return (
    <Container horizontal={horizontal}>
      {items.map((item: SelectorItem, index: number) => (
        <Card
          horizontal={horizontal}
          key={`selector-item-${item.id}`}
          margin={index !== items.length - 1}
          fill={item.id === value}
          onPress={() => onPress(item.id)}>
          <Text selected={item.id === value}>{item.label}</Text>
          <Circle fill={item.id === value} />
        </Card>
      ))}
    </Container>
  );
};

export default Selector;
