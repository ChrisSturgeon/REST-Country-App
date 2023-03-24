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
      display: flex;
      align-items: center;
      margin-bottom: 2em;
      gap: 1em;
      font-weight: 600;

      @media ${device.laptop} {
        grid-column: 1 / 3;
        margin-bottom: 4em;
      }

      button,
      a {
        text-decoration: none;
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.primary};
        padding: 0.25em 1em;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        border: none;
        transition: transform 150ms ease-in-out;

        &:focus {
          outline: 1px solid black;
        }

        &:focus,
        &:hover {
          position: relative;
          transform: translateY(-3px);
        }
      }

      button {
        display: flex;
        align-items: center;
        gap: 0.5em;
        cursor: pointer;

        svg {
          height: 100%;
          width: 20px;
        }
      }

      a {
        display: flex;
        gap: 0.5em;
        align-items: center;

        svg {
          height: 100%;
          width: 20px;
        }
      }

      a,
      button {
        svg {
          path {
            fill: ${(props) => props.theme.svgGreyHovered};
          }
        }
      }
    }

    img {
      margin: 0 auto;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

      @media ${device.laptop} {
        max-height: 350px;
        margin: 0;
      }
    }

    h1 {
      margin-block: 0.5em;
    }

    > div:nth-of-type(2) {
      @media ${device.laptop} {
        margin-left: 4em;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
