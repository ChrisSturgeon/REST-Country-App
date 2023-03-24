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

    > button {
      display: flex;
      gap: 0.5em;
      align-items: center;
      background-color: ${(props) => props.theme.topBtn};
      color: ${(props) => props.theme.primary};
      padding: 0.5em 1em;
      z-index: 99;
      position: fixed;
      font-weight: 700;
      border-radius: 10px;
      border: none;
      top: 87%;
      right: 10vw;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: transform 200ms ease-in-out;

      svg {
        height: 20px;
        width: auto;

        path {
          stroke: ${(props) => props.theme.primary};
        }
      }

      &:hover,
      &:focus {
        transform: scale(1.05);
      }

      &:focus {
        outline: 1px solid black;
      }
    }
  }
`;
