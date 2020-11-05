import React from "react";
import styled from "styled-components/macro";

const StyledContainer = styled.div`
  max-width: ${({ width }) => (width ? width : "800px")};
  margin: 0 auto;
  padding-top: 80px;
`;

export default function Container({ children, width }) {
  return <StyledContainer width={width}>{children}</StyledContainer>;
}
