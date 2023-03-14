import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: pink;
`;

export default function Test() {
  return <StyledButton>Click this</StyledButton>;
}
