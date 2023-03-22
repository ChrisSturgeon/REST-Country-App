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

  @media ${device.tablet} {
    grid-template-rows: 200px 1fr;
  }

  img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    object-fit: contain;
    height: 100%;
    width: 100%;
    /* background-color: pink; */

    @media ${device.tablet} {
      object-fit: cover;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    padding: 1.5em 2em 2em 2em;
    /* background-color: red; */

    h2 {
      margin-bottom: 0.5em;
    }

    span {
      font-weight: 600;
    }
  }
`;
