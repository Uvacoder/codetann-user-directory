import React, { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";

export default function NavBar({ actions }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };
  return (
    <Container>
      <h1>Directory</h1>
      <AddButton onClick={handleClick} className="fas fa-plus"></AddButton>
      {toggle && <Modal actions={actions} setToggle={setToggle} />}
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
`;

const AddButton = styled.button`
  height: 3rem;
  width: 3rem;
  font-size: 22px;
  color: white;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
