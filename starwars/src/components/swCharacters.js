import React, { useState, useEffect } from "react";
import axios from "axios";
import SwCard from "./swCards";
import { Container, Row } from "reactstrap";
import styled from "styled-components";

const Boxed = styled.div`
  background-color: coral;
  border: solid 3px firebrick;
  margin: 3%;
  padding: 3%;
  opacity: 80%;
  width: 300px;
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
      <Row>
        {characters.map(item => {

          return (
            <Boxed>
              <div class="row">
                <div class="col">
                  <SwCard
                    character={item.name}
                    height={item.height}
                    weight={item.mass}
                    hair={item.hair_color}
                  />
                </div>
              </div>
            </Boxed>
          );
        })}
      </Row>
    </Container>
  );
}
