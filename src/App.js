import React from "react";
import styled from "styled-components";
// hooks
import useDirectory from "./hooks/useDirectory";
// components
import NavBar from "./components/NavBar";

function App() {
  const [directory, add, remove, edit] = useDirectory();

  return (
    <Application>
      <NavBar />
    </Application>
  );
}

// styled components
const Application = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #081d34;
`;

export default App;
