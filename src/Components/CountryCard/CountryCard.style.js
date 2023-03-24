import styled from 'styled-components';
import { device } from '../../../devices';
import { Link } from 'react-router-dom';

export const StyledCountryCard = styled(Link)`
  background-color: ${(props) => props.theme.primary};
  height: auto;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  transition: transform 200ms ease-in-out, box-shadow 150ms ease-in-out;

  @media ${device.tablet} {
    grid-template-rows: 200px 1fr;
  }

  &:focus,
  &:hover {
    outline: none;
    transform: scale(1.05);
  }

  img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    object-fit: contain;
    height: 100%;
    width: 100%;

    @media ${device.tablet} {
      object-fit: cover;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 1.5em 2em 2em 2em;

    h2 {
      margin-bottom: 0.5em;
    }

    span {
      font-weight: 600;
    }
  }
`;
