import styled from 'styled-components';
import { device } from '../../../devices';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};

  @media ${device.tablet} {
    padding: 2em;
  }
`;
