import React from "react";
import styled from "styled-components";
// hooks
import useDirectory from "./hooks/useDirectory";
// components
import NavBar from "./components/NavBar";
import Card from "./components/Card";

function App() {
  const [actions, current, length, index] = useDirectory();

  return (
    <Application>
      <NavBar />
      <CardContainer>
        <Box>
          {index !== 0 && (
            <NextPrev onClick={actions.prev} className="fas fa-chevron-left" />
          )}
        </Box>

        <Card details={current} length={length} />

        <Box>
          {index !== length - 1 && (
            <NextPrev onClick={actions.next} className="fas fa-chevron-right" />
          )}
        </Box>
      </CardContainer>
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

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 5rem;

  display: flex;
  justify-content: center;
`;

const NextPrev = styled.button`
  background: none;
  font-size: 22px;
  border: none;
  color: #1eebb4;
  cursor: pointer;
`;

export default App;
