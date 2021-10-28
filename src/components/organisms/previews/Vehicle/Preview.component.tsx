import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Image} from './assets/styles';

interface Props {
  vehicle: any;
}

const Preview: React.FC<Props> = ({vehicle}) => {
  const {navigate} = useNavigation();

  return (
    <Container onPress={() => navigate('Vehicle')}>
      <Image source={vehicle.image} />
    </Container>
  );
};

export default Preview;
