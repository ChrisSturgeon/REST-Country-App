import styled from 'styled-components';
import { device } from '../../../../devices';

export const StyledStats = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 0.25em;

  span {
    font-weight: 600;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
  }

  @media ${device.laptop} {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
  }
`;
