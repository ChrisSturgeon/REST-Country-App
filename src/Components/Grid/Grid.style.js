import styled from 'styled-components';
import { device } from '../../../devices';
export const StyledGrid = styled.div`
  padding: 2em 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 2fr));
  gap: 3em;

  @media ${device.tablet} {
    padding: 2em 0;
  }
`;
