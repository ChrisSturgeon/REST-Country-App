import styled from 'styled-components';
import { device } from '../../../../devices';

export const StyledFilterWrapper = styled.div`
  width: 100%;

  @media ${device.tablet} {
    max-width: 200px;
  }
`;
