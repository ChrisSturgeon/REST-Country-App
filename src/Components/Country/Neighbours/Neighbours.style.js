import styled from 'styled-components';

export const StyledNeighbours = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: -10px;
  gap: 0.5em;
  margin-top: 1em;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.primary};
    padding: 0.25em 1em;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
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
  span {
    font-weight: 600;
  }
`;
