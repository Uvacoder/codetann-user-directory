import React, { useState } from "react";
import styled from "styled-components";

let id = 10;
const initilal = {
  name: {
    first: null,
    last: null,
  },
  city: null,
  photo: null,
  country: null,
  employer: null,
  title: null,
  favoriteMovies: null,
};

export default function Modal({ setToggle, actions, details = initilal }) {
  const [first, setFirst] = useState(details.name.first ?? "");
  const [last, setLast] = useState(details.name.last ?? "");
  const [city, setCity] = useState(details.city ?? "");
  const [url, setUrl] = useState(details.photo ?? "");
  const [country, setCountry] = useState(details.country ?? "");
  const [employer, setEmployer] = useState(details.employer ?? "");
  const [title, setTitle] = useState(details.title ?? "");
  const [movies, setMovies] = useState(
    details.favoriteMovies ? details.favoriteMovies.join(", ") : ""
  );

  const handleAdd = () => {
    if (
      !first ||
      !last ||
      !url ||
      !city ||
      !country ||
      !employer ||
      !title ||
      !movies
    )
      return;

    const data = {
      id: details.id ?? ++id,
      photo: url,
      name: {
        first,
        last,
      },
      city,
      country,
      employer,
      title,
      favoriteMovies: movies.replaceAll(" ", "").split(","),
    };

    if (details.id) actions.edit(details.id, data);
    if (!details.id) actions.add(data);

    setToggle(false);
  };

  return (
    <>
      <Background />
      <Container>
        <label>First Name</label>
        <input
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          type="text"
        />

        <label>Last Name</label>
        <input
          value={last}
          onChange={(e) => setLast(e.target.value)}
          type="text"
        />

        <label>Photo Url</label>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
        />

        <label>City</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
        />

        <label>Country</label>
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          type="text"
        />

        <label>Employer</label>
        <input
          value={employer}
          onChange={(e) => setEmployer(e.target.value)}
          type="text"
        />

        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />

        <label>Top 3 Movies</label>
        <input
          value={movies}
          onChange={(e) => setMovies(e.target.value)}
          type="text"
        />

        <Buttons>
          <CancelButton onClick={() => setToggle(false)}>Cancel</CancelButton>
          <AddButton onClick={handleAdd}>
            {details.id ? "Save" : "Add"}
          </AddButton>
        </Buttons>
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
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const AddButton = styled.button`
  background: #1eebb4;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 14px;
  cursor: pointer;
`;
const CancelButton = styled.button`
  background: none;
  color: #ffffff8b;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 14px;
  cursor: pointer;
`;
