import styled from 'styled-components';
import { device } from '../../../../devices';

export const StyledSearch = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  @media ${device.tablet} {
    max-width: 400px;
  }

  > svg {
    position: absolute;
    height: 1.5em;
    width: 1.5em;
    top: ${(props) => (props.hasFocus || props.searchName ? '2rem' : '1.5rem')};
    left: 1em;
    transition: top 200ms ease-in-out, font-size 200ms ease-in-out;
    cursor: pointer;

    path {
      stroke: ${(props) => props.theme.svgGrey};
    }
  }

  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;

  input {
    border: none;
    background-color: transparent;
    width: 100%;
    padding: 2em 1em 1em 3em;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: inherit;
    color: ${(props) => props.theme.text};
    cursor: pointer;

    &:focus {
      outline: none;
      box-shadow: ${(props) => `0px 0px 0 1px ${props.theme.text}`};
    }
  }

  label {
    position: absolute;
    left: 3rem;
    top: ${(props) =>
      props.hasFocus || props.searchName ? '0.8rem' : '1.5rem'};
    color: ${(props) => props.theme.text};
    font-size: ${(props) =>
      props.hasFocus || props.searchName ? '0.7rem' : '1rem'};
    transition: top 200ms ease-in-out, font-size 200ms ease-in-out;
    cursor: pointer;
  }

  button {
    position: absolute;
    left: 88%;
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;

    svg {
      height: 22%;
      g path {
        stroke-width: 4;
        stroke: ${(props) => props.theme.svgGrey};
      }
    }

    &:focus,
    &:hover {
      outline: none;

      svg g path {
        stroke: ${(props) => props.theme.svgGreyHovered};
      }
    }
  }
`;
