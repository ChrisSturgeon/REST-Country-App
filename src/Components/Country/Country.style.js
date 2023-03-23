import styled from 'styled-components';
import { device } from '../../../devices';

export const StyledCountryMain = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  > div {
    width: clamp(200px, 100%, 1500px);
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;

    padding: 2em;

    @media ${device.laptop} {
      padding: 4em;
      grid-template-columns: 40% 60%;
      grid-template-rows: auto auto 1fr;
    }

    > div:first-of-type {
      background-color: red;
      display: flex;
      align-items: center;
      margin-bottom: 2em;

      @media ${device.laptop} {
        grid-column: 1 / 3;
        margin-bottom: 4em;
      }
    }

    img {
      margin: 0 auto;
    }

    > div:nth-of-type(2) {
      @media ${device.laptop} {
        margin-left: 4em;
        /* display: flex;
        flex-direction: column;
        justify-content: space-around; */
      }
    }
  }
`;
