import styled from 'styled-components';

export const StyledSearch = styled.div`
  position: relative;
  display: flex;
  width: clamp(200px, 300px, 100%);
  background-color: ${(props) => props.theme.primary};
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  input {
    border: none;
    background-color: transparent;
    width: 100%;
    padding: 0.75em 1em;
    padding-top: 2em;
    color: ${(props) => props.theme.text};
  }

  label {
    position: absolute;
    left: 1rem;
    top: ${(props) =>
      props.hasFocus || props.searchName ? '0.7rem' : '1.3rem'};
    color: ${(props) => props.theme.text};
    font-size: ${(props) =>
      props.hasFocus || props.searchName ? '0.8rem' : '1rem'};
    transition: top 200ms ease-in-out, font-size 200ms ease-in-out;
  }
`;
