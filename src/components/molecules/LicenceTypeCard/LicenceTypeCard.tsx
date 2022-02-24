import React, {useState} from 'react';
import Styled from 'styled-components/native';

import colors from '@utils/colors';
import fonts from '@utils/fonts';

import Licence from '@assets/licence.png';

import {Card, PillButton} from '@components/atoms';

import {LicenceType} from '@components/modals';

const Container = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TitleContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = Styled.Image.attrs({
  source: Licence,
})`
  height: 20px;
  width: 30px;
  margin-right: 8px;
`;

const Title = Styled.Text`
  color: ${colors.text.success};
  font-family: ${fonts.main.bold};
  font-size: 16px;
`;

const LicenceTypeCard: React.FC = () => {
  const [showLicenceTypeModal, toggleLicenceTypeModal] = useState(true);
  return (
    <>
      <Card
        onPress={() => toggleLicenceTypeModal(true)}
        color={colors.background.success}
        shadowColor={colors.shadow.main}>
        <Container>
          <TitleContainer>
            <Icon />
            <Title>Full GB Licence</Title>
          </TitleContainer>
          <PillButton
            text="Edit"
            onPress={() => toggleLicenceTypeModal(true)}
          />
        </Container>
      </Card>
      <LicenceType
        show={showLicenceTypeModal}
        close={() => toggleLicenceTypeModal(false)}
      />
    </>
  );
};

export default LicenceTypeCard;
