import React from "react";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Container>
      <h1>Directory</h1>
      <button className="fas fa-plus"></button>
    </Container>
  );
}

// styled components
const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;

  h1 {
    color: red;
  }
`;
