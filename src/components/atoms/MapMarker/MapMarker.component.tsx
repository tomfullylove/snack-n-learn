import React from 'react';

import {Marker} from './assets/styles';

interface Props {
  selected?: boolean;
}

const MapMarker: React.FC<Props> = ({selected = false}) => {
  return <Marker selected={selected} />;
};

export default MapMarker;
