import React from "react"
import styled from "styled-components";

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.5%;
  margin: 1%;
  border: 1.2px solid black;
  border-radius: 2px;
  background: rgb(0, 0, 0, 0.4);
`;

const Players = props =>{

return(
  <PlayersContainer>

  <h1>Name: {props.info.name}</h1>
  <p>Country: {props.info.country}</p>
  <p>Searches: {props.info.searches}</p>

</PlayersContainer>

)



}








export default Players;
