import Styled from 'styled-components/native';

export const Container = Styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const LocationContainer = Styled.View`
  max-width: 80%;
  height: 40px;
  margin-bottom: 12px;
  align-self: center;
`;
