import Styled from 'styled-components/native';

export const Container = Styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px 20px;
`;


export const Spacer = Styled.View`
  width: 16px;
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
