import React from 'react';
import Styled from 'styled-components/native';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

const Container = Styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${colors.background.alt}
  height: 40px;
  width: 100%;
`;

const Text = Styled.Text`
  color: ${colors.text.active};
  font-family: ${fonts.main.bold};
  font-size: 14px;
`;

interface Props {
  text: string;
  onPress?: () => void;
}

const AltButton: React.FC<Props> = ({onPress, text}) => {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
};

export default AltButton;
