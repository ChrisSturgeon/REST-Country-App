import styled from 'styled-components';
import { device } from '../../../devices';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  padding: 1em;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 1.5rem;
  }

  @media ${device.tablet} {
  }
`;
