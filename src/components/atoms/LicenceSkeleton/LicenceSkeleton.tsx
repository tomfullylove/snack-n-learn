import React from 'react';
import Styled from 'styled-components/native';

import colors from '@utils/colors';

interface LineProps {
  height: number;
}

const Container = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;

  width: 100%;
  height: 100%;

  border: 6px solid ${colors.background.main};

  opacity: 0.4;
`;

const ContentContainer = Styled.View`
  display: flex;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  margin-left: 8%;
`;

const Title = Styled.View`
  border-radius: 4px;
  margin-top: 25%;
  margin-right: 8%;
  width: 8%;
  height: 60%;
  background-color: ${colors.background.main};
`;

const Image = Styled.View`
  border-radius: 4px;
  margin-top: 12%;
  width: 54%;
  aspect-ratio: 1.3;
  background-color: ${colors.background.main};
`;

const DetailsContainer = Styled.View`
  display: flex;
  flex-direction: row;
  height: 60%;
`;

const Line = Styled.View<LineProps>`
  border-radius: 4px;
  margin-top: 10%;
  width: 2%;
  height: ${({height}) => height}%;
  background-color: ${colors.background.main};
  margin: 10% 3% 0;
`;

const Spacer = Styled.View`
  width: 9%;
`;

const LicenceSkeleton: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <Image />
        <DetailsContainer>
          <Line height={30} />
          <Spacer />
          <Line height={70} />
          <Line height={80} />
          <Line height={40} />
          <Line height={60} />
          <Line height={30} />
          <Line height={50} />
        </DetailsContainer>
      </ContentContainer>
      <Title />
    </Container>
  );
};

export default LicenceSkeleton;
