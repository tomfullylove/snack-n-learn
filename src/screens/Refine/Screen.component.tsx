import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  PageContainer,
  TopContainer,
  CloseIcon,
  ScrollContainer,
} from './assets/styles';

const Content: React.FC = () => {
  const navigation = useNavigation();

  return (
    <PageContainer>
      <TopContainer>
        <CloseIcon onPress={() => navigation.goBack()} />
      </TopContainer>
      <ScrollContainer />
    </PageContainer>
  );
};

export default Content;
