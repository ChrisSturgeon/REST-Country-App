import styled from 'styled-components';
import { device } from '../../../devices';

export const StyledCountryWrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: 200px 1fr;
  padding: 2em;

  @media ${device.tablet} {
    padding: 4em;
  }

  main {
    width: clamp(200px, 100%, 1500px);
  }
`;
