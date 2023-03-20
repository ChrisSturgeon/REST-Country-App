import styled from 'styled-components';

export const CountriesWrapper = styled.div`
  min-height: 100%;
  background-color: ${(props) => props.theme.background};
  display: flex;
  justify-content: center;

  main {
    width: clamp(200px, 100%, 1500px);
  }
`;
