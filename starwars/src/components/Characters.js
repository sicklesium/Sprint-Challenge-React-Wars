import React, { useState, useEffect } from "react";
import axios from "axios";
import SwCard from "./Cards";
import { Container } from "reactstrap";
import styled from "styled-components";

const Boxed = styled.div`
  background-color: coral;
  border: solid 3px firebrick;
  margin: 3%;
  padding: 3%;
  opacity: 80%;
  width: 300px;
  border-radius: 5px;
`;

const Flexed = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 825px;
  margin: auto;
`;

export default function StarWars() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }, []);

  return (
    <Container>
      <Flexed>
        {characters.map(item => {

          return (
            <Boxed>
                  <SwCard
                    character={item.name}
                    height={item.height}
                    weight={item.mass}
                    hair={item.hair_color}
                  />
            </Boxed>
          );
        })}
      </Flexed>
    </Container>
  );
}
