import styled from 'styled-components';
import { device } from '../../../../devices';

export const StyledSearch = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  @media ${device.tablet} {
    max-width: 400px;
  }

  svg {
    position: absolute;
    height: 1.5em;
    width: 1.5em;
    top: ${(props) => (props.hasFocus || props.searchName ? '2rem' : '1.5rem')};
    left: 1em;
    transition: top 200ms ease-in-out, font-size 200ms ease-in-out;

    path {
      stroke: ${(props) => props.theme.text};
    }
  }

  background-color: ${(props) => props.theme.primary};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  input {
    border: none;
    background-color: transparent;
    width: 100%;
    padding: 2em 1em 1em 3em;
    color: ${(props) => props.theme.text};

    &:focus {
      outline: 1px solid black;
      outline-style: solid;
      outline-width: 1px;
      outline-color: ${(props) => props.theme.text};
      border-radius: 5px;
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
  }
`;
