import React from "react";
import styled from "styled-components";

export default function Card({ details, length }) {
  const { id, photo, name, city, country, employer, title, favoriteMovies } =
    details;

  return (
    <Container>
      <span>
        <button className="fas fa-ellipsis-h"></button>
      </span>

      <Info>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Img photo={photo} />
          <InfoDetails>
            <h3>
              {name.first} {name.last}
            </h3>
            <p>
              {employer} • {title}
            </p>
            <p>
              {city}, {country}
            </p>
          </InfoDetails>
        </div>

        <Movies>
          <p>Favorite Movies</p>
          <ul>
            {favoriteMovies.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </Movies>
      </Info>
    </Container>
  );
}

// styled components
const Container = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background: #1c3246;
  border-radius: 0.5rem;
  padding: 2rem;

  span:first-child {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
  }

  button {
    font-size: 18px;
    color: #1eebb4;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
const Img = styled.div`
  background-image: ${(props) => `url(${props.photo})`};
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  height: 10rem;
  width: 10rem;
  margin-right: 1.5rem;
`;
const InfoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  h3 {
    color: white;
  }

  p {
    color: #978e8e;
    font-size: 14px;
    margin-top: 0.5rem;
  }
`;
const Movies = styled.div`
  display: flex;
  min-width: 20rem;
  border: 1px solid #978e8e63;
  border-radius: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  p {
    color: white;
    margin-top: 1.5rem;
    font-weight: bold;
  }
  ul {
    color: #978e8e;
    margin-top: 0.5rem;
    list-style: none;
    text-align: center;
  }
  li {
    font-size: 12px;
    margin-bottom: 0.5rem;
  }
`;
