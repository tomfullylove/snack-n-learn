import Styled from 'styled-components/native';

import colors from '../../../utils/colors';

export default Styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
    display: flex;
    flex-direction: column;
    background-color: ${colors.background.main};
`;
