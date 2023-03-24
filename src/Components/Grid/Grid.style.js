import styled from 'styled-components';
import { device } from '../../../devices';
export const StyledGrid = styled.div`
  padding: 2em 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
  gap: 3em;

  @media ${device.tablet} {
    padding: 2em 0;
  }
`;
