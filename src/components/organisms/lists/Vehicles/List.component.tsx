import React from 'react';
import {FlatList} from 'react-native';

import Preview from '../../../../components/organisms/previews/Vehicle';

import {Spacer} from './assets/styles';

interface Props {
  listRef: React.RefObject<any>;
  vehicles: any;
  setFocusedVehicle: (arg0: any, arg1: boolean, arg2: boolean) => void;
}

const VehicleList = React.forwardRef((props, ref) => {
  const renderItem = ({item}) => {
    return <Preview vehicle={item} />;
  };
  return (
    <FlatList
      ref={ref}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.vehicles}
      renderItem={renderItem}
      ItemSeparatorComponent={Spacer}
      decelerationRate={0}
      snapToInterval={264}
      onMomentumScrollEnd={(event) => {
        const xOffset = event.nativeEvent.contentOffset.x;
        const scrollToIndex = Math.round(xOffset / 248);
        props.setFocusedVehicle(props.vehicles[scrollToIndex], true, false);
      }}
    />
  );
});

const List: React.FC<Props> = ({listRef, vehicles, setFocusedVehicle}) => {
  return (
    <VehicleList
      ref={listRef}
      vehicles={vehicles}
      setFocusedVehicle={setFocusedVehicle}
    />
  );
};

export default List;
