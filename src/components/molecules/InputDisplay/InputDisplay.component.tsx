import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../utils/colors';

import {Container, Text, Subtext} from './assets/styles';

interface Props {
  onPress: () => void;
  icon: string;
  subtext: string;
  text: string;
}

const InputDisplay: React.FC<Props> = ({onPress, icon, text, subtext}) => {
  return (
    <Container onPress={onPress}>
      <Ionicons name={icon} color={colors.main} size={20} />
      <Text>{text}</Text>
      <Subtext>{subtext}</Subtext>
    </Container>
  );
};

export default InputDisplay;
