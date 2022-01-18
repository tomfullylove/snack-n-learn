import React from 'react';
import Styled from 'styled-components/native';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

const Container = Styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.background.alt}
  padding: 6px 12px;
`;

const Text = Styled.Text`
  color: ${colors.text.active};
  font-family: ${fonts.main.bold};
  font-size: 12px;
`;

interface Props {
  text: string;
  onPress?: () => void;
}

const PillButton: React.FC<Props> = ({onPress, text}) => {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
};

export default PillButton;
