import styled from 'styled-components';
import Select from 'react-select';
import { device } from '../../../../devices';

export const SortWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  width: 100%;
  width: 100%;

  @media ${device.tablet} {
    width: 250px;
  }

  @media ${device.laptop} {
    margin-left: auto;
  }

  button {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme.primary};
    border: none;
    border-radius: 5px;
    transition: transform 200ms ease-in-out;

    &:hover svg path {
      fill: ${(props) => props.theme.svgGreyHovered};
    }

    &:focus {
      outline: none;
      box-shadow: ${(props) => `0px 0px 0 1px ${props.theme.text}`};

      svg path {
        fill: ${(props) => props.theme.svgGreyHovered};
      }
    }

    svg {
      height: 2rem;
      width: 2rem;

      path {
        fill: ${(props) => props.theme.svgGrey};
      }
    }
  }
`;

export const StyledSortSelect = styled(Select)`
  .Select__control {
    height: 72px;
    left: auto;
    border: none;
    flex-grow: 1;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
    padding-left: 0.5em;
    cursor: pointer;
  }

  .Select__control--is-focused {
    background-color: 'red';
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px;
    color: ${(props) => props.theme.text};
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__input-container {
    color: ${(props) => props.theme.text};
  }

  .Select__single-value {
    color: ${(props) => props.theme.text};
  }

  .Select__placeholder {
    color: ${(props) => props.theme.text};
  }

  .Select__menu {
    background-color: ${(props) => props.theme.primary};
  }

  .Select__menu-list {
    color: ${(props) => props.theme.text};
  }

  .Select__option--is-focused {
    background-color: ${(props) => props.theme.background};
  }

  .Select__option--is-selected {
    background-color: ${(props) => props.theme.reactSelectSelected};
  }
`;
