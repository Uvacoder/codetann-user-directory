import React, { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };
  return (
    <Container>
      <h1>Directory</h1>
      <button onClick={handleClick} className="fas fa-plus"></button>
      {toggle && <Modal setToggle={setToggle} />}
    </Container>
  );
}

// styled components
const Container = styled.div`
  max-width: 900px;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: white;
  }

  button {
    height: 3rem;
    width: 3rem;
    font-size: 22px;
    color: white;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
