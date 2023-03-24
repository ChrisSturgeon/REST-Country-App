import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  font-size: 0.7rem;
  padding: 0.5em 0;

  a {
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 1em;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.svgGreyHovered};

    svg {
      height: 20px;
      width: 20px;

      path {
        fill: ${(props) => props.theme.svgGreyHovered};
      }
    }
  }
`;
