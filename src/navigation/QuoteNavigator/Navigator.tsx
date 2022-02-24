import React from 'react';
import Styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import fonts from '@utils/fonts';
import colors from '@utils/colors';

import {Quote} from '@components/screens';

const ButtonContainer = Styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.background.alt}
  height: 32px;
  width: 32px;
  margin-right: 4px;
`;

const ButtonIcon = Styled(Ionicons).attrs({
  name: 'close',
  color: colors.text.active,
  size: 24,
})`
`;

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {backgroundColor: colors.background.sub},
      }}>
      <Stack.Screen
        name="Get insured"
        component={Quote}
        options={{
          headerLargeTitle: false,
          headerLargeTitleStyle: {
            color: colors.text.main,
            fontFamily: fonts.main.bold,
          },
          headerTitleStyle: {
            color: colors.text.main,
            fontFamily: fonts.main.bold,
          },
          headerRight: () => (
            <ButtonContainer onPress={() => navigation.goBack()}>
              <ButtonIcon />
            </ButtonContainer>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
