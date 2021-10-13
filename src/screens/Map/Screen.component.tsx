import React, {useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

import MapMarker from '../../components/atoms/MapMarker';
import VehicleList from '../../components/organisms/lists/Vehicles';

import {Container, BottomContainer} from './assets/styles';

import {Props} from './Screen.container';

const Map: React.FC<Props> = ({availableVehicles}) => {
  const [focusedVehicle, setfocusedVehicle] = useState(availableVehicles[0]);

  const mapRef = useRef(null);
  const vehicleListRef = useRef(null);

  const setFocusedVehicle = (vehicle, navigate = true, scroll = true) => {
    setfocusedVehicle(vehicle);
    if (navigate && mapRef && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: vehicle.location.latitude,
        longitude: vehicle.location.longitude,
      });
    }
    if (scroll && vehicleListRef && vehicleListRef.current) {
      vehicleListRef.current.scrollToItem({item: vehicle});
    }
  };

  return (
    <Container>
      <MapView
        ref={mapRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        initialRegion={{
          latitude: availableVehicles[0].location.latitude,
          longitude: availableVehicles[0].location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        rotateEnabled={false}
        showsUserLocation={true}>
        {availableVehicles.map(vehicle => (
          <Marker
            key={vehicle.id}
            coordinate={vehicle.location}
            onPress={(): void => setFocusedVehicle(vehicle, false, true)}>
            <MapMarker selected={vehicle === focusedVehicle} />
          </Marker>
        ))}
      </MapView>
      <BottomContainer>
        <VehicleList
          listRef={vehicleListRef}
          vehicles={availableVehicles}
          setFocusedVehicle={setFocusedVehicle}
        />
      </BottomContainer>
    </Container>
  );
};

export default Map;
