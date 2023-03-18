import styled from 'styled-components';
import { device } from '../../../devices';

export const StyledButton = styled.button`
  position: relative;
  border: none;
  display: flex;
  align-items: center;
  width: 60px;
  height: 30px;
  padding: 0.15em 0.2em;
  border-radius: 100vw;
  background-color: ${(props) => (props.darkMode ? 'grey' : 'lightblue')};
  transition: background-color 300ms ease-in-out;

  @media ${device.tablet} {
    margin-left: auto;
  }

  div {
    position: absolute;
    height: 90%;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background-color: white;
    position: relative;
    right: ${(props) => (props.darkMode ? '-25%' : '25%')};
    transition: right 300ms ease-in-out;
    z-index: 2;
  }

  svg {
    /* height: 100%; */
    position: relative;
    height: 80%;
    width: 40px;
    background-color: transparent;

    &:nth-of-type(1) {
      left: 10px;
      fill: white;
      stroke: white;
    }

    &:nth-of-type(2) {
      fill: orange;
      right: 10px;
      path {
        fill: orange;
        stroke: orange;
        stroke-width: 5px;
      }
    }
  }
`;
