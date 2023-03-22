import styled from 'styled-components';
import { device } from '../../../devices';
export const StyledGrid = styled.div`
  /* height: 500px; */
  /* background-color: red; */
  padding: 1em 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 2fr));
  gap: 4em;

  @media ${device.tablet} {
    padding: 1em 0;
  }
`;
