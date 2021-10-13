import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  available: [
    {
      id: '0',
      make: 'Vauxhall',
      model: 'Corsa',
      location: {
        latitude: 51.500293,
        longitude: -3.170266,
      },
      image: require('../../../assets/vehicle-1.png'),
    },
    {
      id: '1',
      make: 'Volvo',
      model: 'XC60',
      location: {
        latitude: 51.499752,
        longitude: -3.173957,
      },
      image: require('../../../assets/vehicle-3.png'),
    },
    {
      id: '2',
      make: 'Elephant',
      model: 'African Bush',
      location: {
        latitude: 51.498523,
        longitude: -3.170524,
      },
      image: require('../../../assets/vehicle-4.webp'),
    },
    {
      id: '3',
      make: 'Mercedes',
      model: 'E250',
      location: {
        latitude: 51.502145,
        longitude: -3.173411,
      },
      image: require('../../../assets/vehicle-2.png'),
    },
  ],
};

const vehilcesSlice = createSlice({
  name: 'vehiclesSlice',
  initialState: initialState,
  reducers: {},
});

export default vehilcesSlice.reducer;
