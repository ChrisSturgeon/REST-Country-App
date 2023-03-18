import styled from 'styled-components';
import { device } from '../../../devices';

export const StyledHeader = styled.header`
  display: flex;
  max-width: 100%;
  gap: 1em;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  padding: 1em;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  z-index: 2;

  @media ${device.tablet} {
    justify-content: flex-start;
    padding: 1em 2em;
    gap: 2em;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  svg {
    height: 40px;
    width: 40px;

    path:nth-of-type(1) {
      fill: lightblue;
    }

    path:nth-of-type(2),
    path:nth-of-type(3),
    path:nth-of-type(4),
    path:nth-of-type(5) {
      stroke: ${(props) => props.theme.globeSVG};
    }
  }
`;
