import React from 'react';
import Styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import colors from '@utils/colors';

import {Card, Button} from '@components/atoms';

const Container = Styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
  },
})`
  display: flex;
  background-color: ${colors.background.sub};
`;

const Screen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Card>
        <Button
          text="Get insured"
          onPress={() => {
            navigation.navigate('Quote');
          }}
        />
      </Card>
    </Container>
  );
};

export default Screen;
