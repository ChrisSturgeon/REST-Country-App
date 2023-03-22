import styled from 'styled-components';
import { device } from '../../../devices';

export const CountriesWrapper = styled.div`
  min-height: 100%;
  background-color: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;

  main {
    width: clamp(200px, 100%, 1500px);
    padding: 2em;

    @media ${device.tablet} {
      padding: 2em 4em;
    }
  }
`;
