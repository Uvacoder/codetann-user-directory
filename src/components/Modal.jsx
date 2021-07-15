import React from "react";
import styled from "styled-components";

export default function Modal({ setToggle }) {
  return (
    <>
      <Background />
      <Container>
        <label htmlFor="">First Name</label>
        <input type="text" />

        <label htmlFor="">Last Name</label>
        <input type="text" />

        <label htmlFor="">City</label>
        <input type="text" />

        <label htmlFor="">Country</label>
        <input type="text" />

        <label htmlFor="">Employer</label>
        <input type="text" />

        <label htmlFor="">Title</label>
        <input type="text" />

        <label htmlFor="">Top 3 Movies</label>
        <input type="text" />

        <div>
          <button onClick={() => setToggle(false)}>Cancel</button>
          <button>Add</button>
        </div>
      </Container>
    </>
  );
}

// styled components
const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  bottom: 0;
  left: 0;
  background: #00000092;
  backdrop-filter: blur(6px);
`;
const Container = styled.div`
  position: absolute;
  max-width: 20rem;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1c3246;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  label {
    color: white;
    margin-bottom: 0.1rem;
  }

  input {
    margin-bottom: 2rem;
    background: #ffffff37;
    border: none;
    height: 2rem;
    border-radius: 0.3rem;
    outline: none;
    padding-left: 1rem;
    color: white;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    font-size: 14px;
  }
`;
